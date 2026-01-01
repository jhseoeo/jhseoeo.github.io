# Notion 블로그 동기화

AWS ECS Fargate와 EventBridge를 사용하여 Notion에서 SvelteKit 정적 블로그로 매일 자동 동기화합니다.

[English Documentation](./README.md)

## 아키텍처

```
Notion API → ECS Fargate (매일 자정 KST)
                ↓
          1. 페이지 가져오기 (Go)
          2. 이미지 다운로드 (Go)
          3. .svelte 파일 생성 (Go)
                ↓
          4. Git 동기화 (Bash 스크립트)
             - 저장소 클론
             - 파일 복사
             - 'posts' 브랜치에 푸시
                ↓
          GitHub Actions (자동 트리거)
             - npm ci
             - npm run build
             - GitHub Pages에 배포
                ↓
          블로그 업데이트 완료! ✨
```

## 브랜치 전략

- **`master`**: 개발용 (코드 수정, PR, 인프라)
- **`posts`**: 프로덕션 (블로그 포스트만, 배포 트리거)

## 비용

**월 ~$0.10** 💰

- ECS Fargate: ~$0.04/월 (30회 실행 × 5분)
- AWS Systems Manager Parameter Store: **무료**
- CloudWatch Logs: ~$0.01/월
- ECR: ~$0.05/월
- VPC/서브넷/IGW: **무료**
- GitHub Actions: **무료** (퍼블릭 저장소)

## 사전 요구사항

### 필수 도구
- [AWS CLI](https://aws.amazon.com/cli/) (자격 증명 설정 완료)
- [Terraform](https://www.terraform.io/downloads) >= 1.0
- [Docker](https://www.docker.com/get-started)
- [Go](https://golang.org/dl/) 1.23+ (로컬 테스트용)

### 필수 계정 및 자격 증명
- 적절한 권한이 있는 AWS 계정
- [Notion Integration](https://www.notion.so/my-integrations) API 키
- [GitHub Personal Access Token](https://github.com/settings/tokens) (`repo` 권한 필요)
- **GitHub 퍼블릭 저장소** (무료 GitHub Pages는 퍼블릭 저장소 필요)

### GitHub Pages 설정

이 프로젝트는 사용자/조직 사이트 형식의 GitHub Pages를 사용합니다:
- 저장소 이름은 반드시: `<username>.github.io`
- 블로그 URL: `https://<username>.github.io/`
- 예시: 사용자명이 `johndoe`라면 `johndoe.github.io` 저장소를 생성하세요

## 설치 가이드

### 1. GitHub 저장소 생성

```bash
# GitHub.com에서 새 퍼블릭 저장소 생성:
# <your-username>.github.io

# 이 템플릿 클론
git clone https://github.com/jhseoeo/notion-blog.git
cd notion-blog

# 원격 저장소를 본인 저장소로 변경
git remote set-url origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin master
```

### 2. Terraform 변수 설정

`terraform/terraform.tfvars` 파일 수정:

```hcl
project_name = "notion-blog-sync"
aws_region   = "ap-northeast-2"

# Notion Integration 페이지에서 가져오기
notion_secret = "ntn_xxxxxxxxxxxxx"
notion_db_id  = "your-database-id"

# GitHub PAT 생성 ('repo' 권한 필요)
github_token     = "ghp_xxxxxxxxxxxxx"
github_repo      = "https://github.com/<YOUR_USERNAME>/<YOUR_USERNAME>.github.io.git"
git_user_name    = "Notion Blog Sync Bot"
git_user_email   = "your-email@example.com"

# 매일 자정 KST (15:00 UTC)
schedule_expression = "cron(0 15 * * ? *)"
```

**중요:** `terraform.tfvars`는 절대 커밋하지 마세요 (이미 `.gitignore`에 포함됨)

**참고:** `posts` 브랜치는 워크플로우가 처음 실행될 때 자동으로 생성됩니다. 수동으로 만들 필요가 없습니다.

### 3. 인프라 배포

```bash
cd terraform

# Terraform 초기화
terraform init

# 변경사항 검토
terraform plan

# 인프라 배포 (yes 입력)
terraform apply

# 다음 단계를 위해 출력값 저장
terraform output ecr_repository_url
```

### 4. GitHub Pages 활성화

1. GitHub에서 본인의 저장소로 이동
2. **Settings → Pages** 이동
3. **Source** 아래에서 다음 선택:
   - Source: **Deploy from a branch**
   - Branch: **`gh-pages`**
   - Folder: **`/ (root)`**
4. **Save** 클릭
5. 1-2분 대기 (GitHub이 사이트 빌드)

**블로그 접근 URL:** `https://<your-username>.github.io/`

**참고:** `gh-pages` 브랜치는 `posts` 브랜치에 푸시할 때 GitHub Actions 워크플로우가 자동으로 생성합니다.

### 5. Docker 이미지 빌드 및 푸시

```bash
cd ../workflow

# Terraform output에서 ECR 저장소 URL 가져오기
ECR_REPO=$(cd ../terraform && terraform output -raw ecr_repository_url)

# ECR 로그인
aws ecr get-login-password --region ap-northeast-2 | \
  docker login --username AWS --password-stdin $ECR_REPO

# Docker 이미지 빌드
docker build -t notion-blog-sync .

# 태그 및 푸시
docker tag notion-blog-sync:latest $ECR_REPO:latest
docker push $ECR_REPO:latest
```

### 6. 수동 실행 테스트 (선택사항)

```bash
# ECS 태스크 수동 트리거
cd ../terraform

aws ecs run-task \
  --cluster notion-blog-sync-cluster \
  --task-definition notion-blog-sync \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[$(terraform output -json subnet_ids | jq -r '.[0]')],securityGroups=[$(terraform output -raw security_group_id)],assignPublicIp=ENABLED}" \
  --region ap-northeast-2

# 로그 확인
aws logs tail /ecs/notion-blog-sync --follow
```

### 7. GitHub Actions 설정 (선택사항)

**목적:** Workflow 코드 변경 시 Docker 이미지 자동 재빌드

**이미 설정된 두 워크플로우:**

1. **`deploy-workflow.yml`** - `master` 브랜치에서 Docker 이미지 재빌드
   - 트리거: `master`의 `workflow/**` 푸시
   - 동작: 빌드 → ECR 푸시

2. **`deploy-pages.yml`** - `posts` 브랜치에서 블로그 배포
   - 트리거: `posts` 브랜치의 모든 푸시
   - 동작: 블로그 빌드 → GitHub Pages 배포

**설정:**

1. **GitHub Secrets 설정:**
   - 저장소 Settings → Secrets and variables → Actions
   - 다음 시크릿 추가:
     - **옵션 A (권장):** `AWS_ROLE_ARN` - OIDC 인증용
     - **옵션 B:** `AWS_ACCESS_KEY_ID`와 `AWS_SECRET_ACCESS_KEY`

2. **OIDC 설정 (옵션 A):**
   ```bash
   # AWS에서 OIDC 프로바이더 및 IAM 역할 생성
   # 참고: https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services
   ```

3. **워크플로우 파일 수정** (`.github/workflows/deploy-workflow.yml`):
   - 액세스 키를 사용하는 경우 Option 2 섹션 주석 해제

이제:
- `master`에 workflow 변경 푸시 → Docker 이미지 재빌드
- ECS 태스크가 `posts`에 푸시 → 블로그 자동 배포

## 모니터링

### 로그 확인

```bash
# 실시간 로그 확인
aws logs tail /ecs/notion-blog-sync --follow

# 에러 필터링
aws logs filter-log-events \
  --log-group-name /ecs/notion-blog-sync \
  --filter-pattern "ERROR"
```

### EventBridge 스케줄 확인

```bash
# 예약된 태스크 목록
aws events list-rules --name-prefix notion-blog-sync

# 규칙 상세 정보
aws events describe-rule --name notion-blog-sync-daily
```

### ECS 태스크 상태

```bash
# 최근 태스크 목록
aws ecs list-tasks --cluster notion-blog-sync-cluster

# 특정 태스크 상세 정보
aws ecs describe-tasks \
  --cluster notion-blog-sync-cluster \
  --tasks <task-id>
```

또는 AWS Console 사용:
- **ECS:** https://console.aws.amazon.com/ecs/
- **EventBridge:** https://console.aws.amazon.com/events/
- **CloudWatch Logs:** https://console.aws.amazon.com/cloudwatch/

## 문제 해결

### 컨테이너 시작 실패

1. CloudWatch 로그에서 에러 확인
2. ECS 태스크 정의에서 환경 변수 검증
3. 로컬 테스트:
   ```bash
   cd workflow
   cp .env.example .env  # 자격 증명으로 수정
   go run main.go
   ```

### Git push 실패

1. GitHub 토큰에 `repo` 권한이 있는지 확인
2. `terraform.tfvars`에서 저장소 URL이 올바른지 확인
3. Git 사용자 이메일이 설정되어 있는지 확인

### 변경사항이 커밋되지 않음

Notion 콘텐츠가 변경되지 않았다면 정상입니다. 로그 확인:
```
No changes to commit
```

### GitHub Pages가 배포되지 않음

1. **저장소가 퍼블릭인지 확인** (Settings → Danger Zone)
2. **GitHub Pages 활성화 확인:**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `(root)`
3. **GitHub Actions 확인:**
   - Actions 탭으로 이동
   - 실패한 `deploy-pages.yml` 워크플로우 확인
   - 에러 로그 확인
4. **첫 푸시 후 1-2분 대기** (초기 설정은 시간이 걸림)
5. **브라우저 캐시 삭제** 또는 시크릿 모드 시도

### 블로그 스타일 깨짐 / 에셋 로딩 실패

브라우저 콘솔에서 에셋 404 에러를 확인하세요:
1. 브라우저 캐시 삭제 또는 시크릿 모드로 시도
2. 코드의 모든 에셋 URL이 절대 경로가 아닌 상대 경로인지 확인
3. GitHub Actions 로그에서 빌드 에러 확인

## 프로젝트 구조

```
notion-blog/
├── .github/
│   └── workflows/
│       ├── deploy-workflow.yml  # master에서 Docker 빌드
│       └── deploy-pages.yml     # posts에서 블로그 배포
├── workflow/                    # Go 애플리케이션
│   ├── main.go                 # 진입점 (Notion 동기화만)
│   ├── sync.sh                 # Git 동기화 스크립트
│   ├── Dockerfile              # 컨테이너 정의
│   ├── notion/                 # Notion API 클라이언트
│   ├── post/                   # 포스트 내보내기 로직
│   └── model/                  # 데이터 구조
├── terraform/                   # Infrastructure as Code
│   ├── vpc.tf                  # VPC & 서브넷
│   ├── ecs.tf                  # 컨테이너 오케스트레이션
│   ├── eventbridge.tf          # 스케줄링
│   ├── secrets.tf              # SSM Parameter Store
│   ├── iam.tf                  # IAM 역할 & 정책
│   └── ...
└── blog/                        # SvelteKit 블로그
    └── src/
        └── posts/               # 생성된 포스트 (posts 브랜치)
```

## 업데이트

### 워크플로우 코드 업데이트 (master 브랜치)

```bash
git checkout master
cd workflow
# 코드 변경
git add .
git commit -m "워크플로우 업데이트"
git push

# GitHub Actions가 설정되어 있으면 이미지가 자동 배포됨
# 아니면 수동으로 재빌드 및 푸시 (6단계 참고)
```

### 블로그 코드 업데이트 (master 브랜치)

```bash
git checkout master
cd blog
# 변경 (컴포넌트, 스타일 등)
git add .
git commit -m "블로그 디자인 업데이트"
git push

# 변경사항은 배포되지 않음 (posts 브랜치에서만 배포)
```

### 수동 포스팅 (posts 브랜치)

```bash
git checkout posts
cd blog/src/posts
# .svelte 파일 생성 또는 수정
git add .
git commit -m "새 글 추가"
git push

# 자동으로 블로그 배포 트리거!
```

### 인프라 업데이트

```bash
git checkout master
cd terraform
# .tf 파일 수정
terraform plan
terraform apply
```

### 스케줄 변경

`terraform/terraform.tfvars` 수정:
```hcl
# 오전 9시 KST 실행 (자정 UTC)
schedule_expression = "cron(0 0 * * ? *)"

# 하루 2회 실행 (자정, 정오 KST)
# 자정 KST: cron(0 15 * * ? *)
# 정오 KST: cron(0 3 * * ? *)
```

그 다음 적용:
```bash
cd terraform
terraform apply
```

### master 변경사항을 posts에 병합

```bash
# 블로그 코드 변경사항을 posts 브랜치에 동기화하려면
git checkout posts
git merge master
git push
```

## 정리

모든 인프라를 삭제하려면:

```bash
cd terraform
terraform destroy
```

**경고:** 로그 및 ECR 이미지를 포함한 모든 리소스가 삭제됩니다.

## 기여하기

1. 저장소 포크
2. 기능 브랜치 생성
3. 변경사항 커밋
4. 브랜치에 푸시
5. Pull Request 생성

## 라이선스

[MIT License](LICENSE)

## 지원

이슈 및 질문:
- [GitHub Issues](https://github.com/YOUR_USERNAME/notion-blog/issues)
- [Notion API 문서](https://developers.notion.com/)
- [AWS ECS 문서](https://docs.aws.amazon.com/ecs/)
