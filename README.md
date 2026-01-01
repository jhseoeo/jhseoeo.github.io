# Notion Blog Sync

Automated daily synchronization from Notion to a SvelteKit static blog using AWS ECS Fargate and EventBridge.

[한국어 문서](./README.ko.md)

## Architecture

```
Notion API → ECS Fargate (Daily at Midnight KST)
                ↓
          1. Fetch pages (Go)
          2. Download images (Go)
          3. Generate .svelte files (Go)
                ↓
          4. Git sync (Bash script)
             - Clone repo
             - Copy files
             - Push to 'posts' branch
                ↓
          GitHub Actions (auto-triggered)
             - npm ci
             - npm run build
             - Deploy to GitHub Pages
                ↓
          Blog updated! ✨
```

## Branch Strategy

- **`master`**: Development (code changes, PRs, infrastructure)
- **`posts`**: Production (blog posts only, triggers deployment)

## Cost

**~$0.10/month** 💰

- ECS Fargate: ~$0.04/month (30 runs × 5 minutes)
- AWS Systems Manager Parameter Store: **FREE**
- CloudWatch Logs: ~$0.01/month
- ECR: ~$0.05/month
- VPC/Subnets/IGW: **FREE**
- GitHub Actions: **FREE** (public repo)

## Prerequisites

### Required Tools
- [AWS CLI](https://aws.amazon.com/cli/) configured with credentials
- [Terraform](https://www.terraform.io/downloads) >= 1.0
- [Docker](https://www.docker.com/get-started)
- [Go](https://golang.org/dl/) 1.23+ (for local testing)

### Required Accounts & Credentials
- AWS Account with appropriate permissions
- [Notion Integration](https://www.notion.so/my-integrations) with API key
- [GitHub Personal Access Token](https://github.com/settings/tokens) with `repo` scope
- **GitHub public repository** (GitHub Pages requires public repo for free tier)

### GitHub Pages Setup

This project uses GitHub Pages for blog hosting with User/Organization site format:
- Repository name must be: `<username>.github.io`
- Your blog URL will be: `https://<username>.github.io/`
- Example: If your username is `johndoe`, create repository `johndoe.github.io`

## Setup Instructions

### 1. Create Your GitHub Repository

```bash
# On GitHub.com, create a new PUBLIC repository named:
# <your-username>.github.io

# Clone this template
git clone https://github.com/jhseoeo/notion-blog.git
cd notion-blog

# Update remote to your repository
git remote set-url origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin master
```

### 2. Configure Terraform Variables

Edit `terraform/terraform.tfvars`:

```hcl
project_name = "notion-blog-sync"
aws_region   = "ap-northeast-2"

# Get from Notion Integration page
notion_secret = "ntn_xxxxxxxxxxxxx"
notion_db_id  = "your-database-id"

# Create GitHub PAT with 'repo' scope
github_token     = "ghp_xxxxxxxxxxxxx"
github_repo      = "https://github.com/<YOUR_USERNAME>/<YOUR_USERNAME>.github.io.git"
git_user_name    = "Notion Blog Sync Bot"
git_user_email   = "your-email@example.com"

# Daily at midnight KST (15:00 UTC)
schedule_expression = "cron(0 15 * * ? *)"
```

**Important:** Never commit `terraform.tfvars` to git (already in `.gitignore`)

**Note:** The `posts` branch will be automatically created by the workflow when it runs for the first time. You don't need to create it manually.

### 3. Deploy Infrastructure

```bash
cd terraform

# Initialize Terraform
terraform init

# Review planned changes
terraform plan

# Deploy infrastructure (type 'yes' when prompted)
terraform apply

# Save outputs for next steps
terraform output ecr_repository_url
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under **Source**, select:
   - Source: **Deploy from a branch**
   - Branch: **`gh-pages`**
   - Folder: **`/ (root)`**
4. Click **Save**
5. Wait 1-2 minutes for GitHub to build your site

**Your blog will be available at:** `https://<your-username>.github.io/`

**Note:** The `gh-pages` branch will be created automatically by the GitHub Actions workflow when you push to the `posts` branch.

### 5. Build and Push Docker Image

```bash
cd ../workflow

# Get ECR repository URL from terraform output
ECR_REPO=$(cd ../terraform && terraform output -raw ecr_repository_url)

# Login to ECR
aws ecr get-login-password --region ap-northeast-2 | \
  docker login --username AWS --password-stdin $ECR_REPO

# Build Docker image
docker build -t notion-blog-sync .

# Tag and push
docker tag notion-blog-sync:latest $ECR_REPO:latest
docker push $ECR_REPO:latest
```

### 6. Test Manual Execution (Optional)

```bash
# Trigger ECS task manually
cd ../terraform

aws ecs run-task \
  --cluster notion-blog-sync-cluster \
  --task-definition notion-blog-sync \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[$(terraform output -json subnet_ids | jq -r '.[0]')],securityGroups=[$(terraform output -raw security_group_id)],assignPublicIp=ENABLED}" \
  --region ap-northeast-2

# Watch logs
aws logs tail /ecs/notion-blog-sync --follow
```

### 7. Setup GitHub Actions for Workflow Deployment (Optional)

**Purpose:** Automatically rebuild Docker image when workflow code changes

**Two workflows are already configured:**

1. **`deploy-workflow.yml`** - Rebuilds Docker image on `master` branch
   - Triggers: Push to `workflow/**` on `master`
   - Actions: Build → Push to ECR

2. **`deploy-pages.yml`** - Deploys blog on `posts` branch
   - Triggers: Any push to `posts` branch
   - Actions: Build blog → Deploy to GitHub Pages

**Setup:**

1. **Configure GitHub Secrets:**
   - Go to repository Settings → Secrets and variables → Actions
   - Add secrets:
     - **Option A (Recommended):** `AWS_ROLE_ARN` - for OIDC authentication
     - **Option B:** `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`

2. **Setup OIDC (Option A):**
   ```bash
   # Create OIDC provider and IAM role in AWS
   # See: https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services
   ```

3. **Update workflow file** (`.github/workflows/deploy-workflow.yml`):
   - If using access keys, uncomment Option 2 section

Now:
- Push to `master` with workflow changes → Docker image rebuilds
- ECS task pushes to `posts` → Blog deploys automatically

## Monitoring

### View Logs

```bash
# Tail logs in real-time
aws logs tail /ecs/notion-blog-sync --follow

# Filter errors
aws logs filter-log-events \
  --log-group-name /ecs/notion-blog-sync \
  --filter-pattern "ERROR"
```

### Check EventBridge Schedule

```bash
# List scheduled tasks
aws events list-rules --name-prefix notion-blog-sync

# View rule details
aws events describe-rule --name notion-blog-sync-daily
```

### ECS Task Status

```bash
# List recent tasks
aws ecs list-tasks --cluster notion-blog-sync-cluster

# Describe specific task
aws ecs describe-tasks \
  --cluster notion-blog-sync-cluster \
  --tasks <task-id>
```

Or use AWS Console:
- **ECS:** https://console.aws.amazon.com/ecs/
- **EventBridge:** https://console.aws.amazon.com/events/
- **CloudWatch Logs:** https://console.aws.amazon.com/cloudwatch/

## Troubleshooting

### Container fails to start

1. Check CloudWatch logs for errors
2. Verify environment variables in ECS task definition
3. Test locally:
   ```bash
   cd workflow
   cp .env.example .env  # Edit with your credentials
   go run main.go
   ```

### Git push fails

1. Verify GitHub token has `repo` scope
2. Check repository URL is correct in `terraform.tfvars`
3. Ensure git user email is configured

### No changes committed

This is normal if Notion content hasn't changed. Check logs:
```
No changes to commit
```

### GitHub Pages not deploying

1. **Check repository is public** (Settings → Danger Zone)
2. **Verify GitHub Pages is enabled:**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `(root)`
3. **Check GitHub Actions:**
   - Go to Actions tab
   - Look for failed `deploy-pages.yml` workflow
   - Check error logs
4. **Wait 1-2 minutes** after first push (initial setup takes time)
5. **Clear browser cache** or try incognito mode

### Blog styles broken / assets not loading

Check browser console for 404 errors on assets:
1. Clear browser cache or try incognito mode
2. Verify all asset URLs in the code are relative, not absolute
3. Check GitHub Actions logs for build errors

## Project Structure

```
notion-blog/
├── .github/
│   └── workflows/
│       ├── deploy-workflow.yml  # Docker build on master
│       └── deploy-pages.yml     # Blog deploy on posts
├── workflow/                    # Go application
│   ├── main.go                 # Entry point (Notion sync only)
│   ├── sync.sh                 # Git sync script
│   ├── Dockerfile              # Container definition
│   ├── notion/                 # Notion API client
│   ├── post/                   # Post export logic
│   └── model/                  # Data structures
├── terraform/                   # Infrastructure as Code
│   ├── vpc.tf                  # VPC & subnets
│   ├── ecs.tf                  # Container orchestration
│   ├── eventbridge.tf          # Scheduling
│   ├── secrets.tf              # SSM Parameter Store
│   ├── iam.tf                  # IAM roles & policies
│   └── ...
└── blog/                        # SvelteKit blog
    └── src/
        └── posts/               # Generated posts (on posts branch)
```

## Updating

### Update workflow code (master branch)

```bash
git checkout master
cd workflow
# Make your changes
git add .
git commit -m "Update workflow"
git push

# If GitHub Actions is configured, image will auto-deploy
# Otherwise, rebuild and push manually (see step 6)
```

### Update blog code (master branch)

```bash
git checkout master
cd blog
# Make your changes (components, styles, etc.)
git add .
git commit -m "Update blog design"
git push

# Changes won't trigger deployment (only on posts branch)
```

### Manual post on posts branch

```bash
git checkout posts
cd blog/src/posts
# Create or edit .svelte files
git add .
git commit -m "Add new post"
git push

# Automatically triggers blog deployment!
```

### Update infrastructure

```bash
git checkout master
cd terraform
# Edit .tf files
terraform plan
terraform apply
```

### Change schedule

Edit `terraform/terraform.tfvars`:
```hcl
# Run at 9 AM KST (midnight UTC)
schedule_expression = "cron(0 0 * * ? *)"

# Run twice daily (midnight and noon KST)
# Midnight KST: cron(0 15 * * ? *)
# Noon KST:     cron(0 3 * * ? *)
```

Then apply:
```bash
cd terraform
terraform apply
```

### Merge changes from master to posts

```bash
# When you want to sync blog code changes to posts branch
git checkout posts
git merge master
git push
```

## Cleanup

To destroy all infrastructure:

```bash
cd terraform
terraform destroy
```

**Warning:** This will delete all resources including logs and ECR images.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

[MIT License](LICENSE)

## Support

For issues and questions:
- [GitHub Issues](https://github.com/YOUR_USERNAME/notion-blog/issues)
- [Notion API Documentation](https://developers.notion.com/)
- [AWS ECS Documentation](https://docs.aws.amazon.com/ecs/)
