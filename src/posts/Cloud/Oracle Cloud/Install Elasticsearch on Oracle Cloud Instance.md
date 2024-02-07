---
title: Oracle Cloud 프리 티어 인스턴스에 Elasticsearch 설치해보기
date: '2024-02-08'
excerpt: 이악물고 돈아끼기라는 뜻
categories:
  - 'Elasticsearch'
coverImage: '/post_img/Cloud/Oracle_Cloud/Install_Elasticsearch_on_Oracle_Cloud_Instance/cover.png'
coverWidth: 16
coverHeight: 9
indexed: true
exposed: true
---

프로젝트에서 Elasticsearch를 사용해야 하는데, Elastic Cloud를 쓰다가 Free trial 기간이 끝나서 대안을 모색하게 되었다.
AWS 제공하는 서비스 중에는 OpenSearch라는 게 있다. 프로젝트 인프라가 AWS에 있어서 관리하기 편하긴 하지만 Elasticsearch와 사용법이 좀 미묘하게 다른 느낌이고, 나는 프리 티어가 끝나서 돈 빠져나가는 게 싫었다.
그런 와중 Oracle Cloud의 프리 티어가 무려 평생 무료로(!) 컴퓨팅 인스턴스를 제공한다는 소식을 듣고 바로 가입했다. 여기에 Elasticsearch를 설치해보자.

<br><br>

## 1. Oracle Cloud 가입

---

<https://www.oracle.com/cloud/>에 접속하여 가입을 진행한다.
가입시 VISA/Mastercard/AMEX 카드가 필요한데 등록만 하고 사용하지 않으면 돈이 빠져나가지 않는 모양이다.
얼마 전까지 요상하게 가입이 안되서 가입을 못하고 있었는데, 최근 가입에 성공했다.

근데 현재 서울 리전은 사용량이 많아서 못 쓰고, 춘천에 있는 리전을 사용해야 한다. 큰 차이는 없을 것 같다.

<br><br>

## 2. VCN 설정

---

모든 것의 시작은 VCN(Virtual Cloud Network) 설정이다. AWS의 VPC와 대응되는 개념이라 할 수 있다.

Subnet, Route Table, Security List 등을 설정해주면 된다.
AWS와 특별히 다른 점이 없어서 쉽게 설정할 수 있을 것이다.

1. VCN 생성
2. Subnet 생성 (본 포스트에서는 Public으로 진행)
3. Route Table 생성
4. Internet Gateway 생성
5. Route Table에 Route Rule 추가 (Destination CIDR Block:0.0.0.0/0, Target: Internet Gateway)
6. Security List 생성
7. Security List에 Ingress/Egress Rule 추가 (Destination CIDR Block:0.0.0.0/0, All Protocols, All traffic for all ports 오픈)
8. Subnet에 Security List 연결
9. Network Security Group 생성
10. Network Security Group에 Ingress/Egress Rule 추가 (22, 80, 9200 포트 등 오픈)

<br><br>

## 3. 인스턴스 생성

---

Elasticsearch의 권장 메모리 용량은 4GB 이상이다. 그러나 슬프게도 프리 티어 인스턴스는 1GB까지만 무료이다.
ARM 기반의 인스턴스를 생성하면 6GB 메모리의 인스턴스도 생성할 수 있는것 같은데, 춘천 리전에서는 ARM 인스턴스를 사용할 수 없는 모양이다 ㅠ
눈물을 머금고 메모리 1GB짜리 x86 인스턴스를 생성하자.

오라클 클라우드의 인스턴스 생성은 AWS보다 더 직관적이라고 할 수 있다. 설정할 것이 많지 않기 때문이다. 그래서 딱히 어려울 건 없는 듯 하다.
앞서 설정한 VCN을 선택하고, SSH 키를 등록하고, 보안 리스트를 선택하고, 인스턴스를 생성하면 된다.
근데 AWS의 Elastic IP에 대응되는 개념을 못 찾았는데, 이건 나중에 찾아봐야겠다.

본인의 경우 Ubuntu 22.04를 선택하여 진행하였다.
따라서 포스트의 나머지 부분 또한 Ubuntu 22.04 기준으로 진행될 것이다.

<br><br>

## 4. Elasticsearch 설치 및 설정

---

인스턴스에 ssh로 접속하여 Elasticsearch를 설치하자.

```bash
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.12.0-linux-x86_64.tar.gz
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.12.0-linux-x86_64.tar.gz.sha512
shasum -a 512 -c elasticsearch-8.12.0-linux-x86_64.tar.gz.sha512
tar -xzf elasticsearch-8.12.0-linux-x86_64.tar.gz
cd elasticsearch-8.12.0/
```

메모리가 1GB밖에 안되기 때문에, JVM의 heap size를 수정해줘야 한다.
`config/jvm.options` 파일에서 `-Xms`와 `-Xmx` 옵션을 수정해주자.
Elasticsearch 문서에 따르면 메모리의 최대 절반 정도까지 할당해주는 것이 좋다고 한다. (<https://www.elastic.co/guide/en/elasticsearch/reference/current/advanced-configuration.html#set-jvm-heap-size>)

```bash
vim config/jvm.options
```

```text+
...
-Xms512m
-Xmx512m
...
```

만약 `-Xms`와 `-Xmx`의 값이 다르면 Elasticsearch가 실행되지 않는다. 작더라도 둘 다 같은 값으로 설정해주자.

<br>

외부에서 elasticsearch에 접속하기 위해서는 `config/elasticsearch.yml` 파일에서 설정을 변경해주어야 한다.

```bash
vim config/elasticsearch.yml
```

```text+
network.host: 0.0.0.0
http.port: 9200
```

elasticsearch를 설치한 직후에는 위 `network.host`와 `http.port` 설정이 주석처리되어 있다. 주석을 해제하고 위와 같이 설정해주자.
`http.port`는 기본적으로 9200번 포트를 사용하는데, 다른 포트를 사용해도 된다. 단 그렇다면 해당 포트를 보안 리스트에서 오픈해주어야 한다.

<br><br>

## 5. 실행 환경 설정

---

### 5.1. Swap space 추가

일어나지 않길 바랬지만, 메모리 문제가 발생하고 말았다.
이 상태로 실행하고 나니, Elasticsearch가 실행되지 않는다. 실행 후 몇 초 있으면 인스턴스 자체가 죽어버리는 상황이다.
tmux 띄워서 `free -h`로 메모리 사용량을 확인해보니, 사용 가능한 메모리가 남아있지 않는 것을 확인하였다.

결국 프리 티어 인스턴스의 1GB짜리 메모리는 역시나 부족했다. 눈물을 머금고 Swap space를 추가해야 한다.
Ubuntu 기준, Swap space를 추가하는 방법은 다음과 같다.

```bash
# 1. Swap 파일 확인
# 아무것도 출력되지 않으면 Swap 파일이 없는 것
sudo swapon -s

# 2. Swap 파일 생성
sudo fallocate -l 2G /swapfile

# 3. Swap 파일 권한 설정
sudo chmod 600 /swapfile

# 4. Swap memory로 설정
sudo mkswap /swapfile
sudo swapon /swapfile

# 5. Swap 파일이 잘 설정되었는지 확인
# 2G의 Swap memory가 추가된 것을 확인할 수 있다.
sudo swapon -s
free -h
```

이후, 재부팅 이후에도 swap space가 유지되도록 `/etc/fstab` 파일을 열고, 최하단에 다음과 같이 추가해주자.

```bash
sudo vim /etc/fstab
```

```text+
/swapfile swap swap defaults 0 0
```

<br><br>

### 5.2. 쓰레드 수와 가상 메모리 크기 설정

이 상태에서도 Elasticsearch가 실행되지 않는다. 로그를 살펴보니 bootstrap checks에서 다음과 같은 두 가지 에러가 발생하는 것을 확인하였다.

```text+
[2] bootstrap checks failed. You must address the points described in the following [2] lines before starting Elasticsearch. For more information see [https://www.elastic.co/guide/en/elasticsearch/reference/8.12/bootstrap-checks.html]
bootstrap check failure [1] of [2]: max number of threads [3511] for user [ubuntu] is too low, increase to at least [4096]; for more information see [https://www.elastic.co/guide/en/elasticsearch/reference/8.12/max-number-threads-check.html]
bootstrap check failure [2] of [2]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]; for more information see [https://www.elastic.co/guide/en/elasticsearch/reference/8.12/_maximum_map_count_check.html]
```

max number of threads는 프로세스당 최대 쓰레드 수를 의미하며, max map count는 가상 메모리 크기를 의미한다.
프리 티어 인스턴스이다 보니, 여러모로 제한이 많은 것 같다.

<br>

max map count를 수정하는 것은 어렵지 않다. `/etc/sysctl.conf` 파일을 열고, 최하단에 다음과 같이 추가해주자.

```bash
sudo vim /etc/sysctl.conf
```

```text+
vm.max_map_count=262144
```

이후, 설정을 적용해주자.

```bash
sudo sysctl -p
```

<br>

[리눅스에서 프로세스당 쓰레드 수는 기본적으로 실제 메모리 크기에 따라 결정되는 모양이다](https://stackoverflow.com/questions/344203/maximum-number-of-threads-per-process-in-linux).
따라서 최대 쓰레드 수를 직접 변경해줄 필요가 있다.

변경하기에 앞서, 최대 쓰레드의 수는 스택 사이즈와 관련이 있다.
운영체제 공부 열심히 했다면 짐작할 수 있겠지만, 쓰레드가 생성되면 생성된 쓰레드가 할당받는 스택 공간이 필요하다. 스택 공간이 한정적이기 때문에, 쓰레드의 수도 한정적이다.

따라서, 스택 공간을 늘리면 쓰레드의 수도 늘어날 것이다. 즉, 가상 메모리 크기를 늘리면 된다.
우리는 이미 Swap space를 추가하여 가상 메모리를 늘렸다. 할 일이 하나 줄은 셈이다.

또는, 스택 사이즈를 줄이면 생성할 수 있는 쓰레드 수가 늘어날 것이다. 쓰레드가 할당받는 스택 사이즈를 줄이면 자연히 더 많은 쓰레드가 생성될 수 있을 것이다.
다만 우리는 이미 가상 메모리를 늘렸으니, 아래의 스택 사이즈를 줄이는 방법은 참고용으로만 보자.

스택 사이즈를 줄이는 방법은 다음과 같다. 아래 명령어대로 진행하면 스택 사이즈를 줄일 수 있다.

```bash
# 참고용입니다

## 현재 스택 사이즈 확인 (기본값은 8192KB인 것을 확인)
ulimit -s

## 스택 사이즈를 4096KB로 줄이기
ulimit -s 4096
```

다음으로, 최대 쓰레드 수를 실제로 늘려주자. 현재 사용자의 최대 쓰레드 수를 확인하려면 다음 명령어를 입력하자.

```bash
cat /proc/sys/kernel/threads-max
```

다음과 같이 `/etc/security/limits.conf` 파일을 열고, 최하단에 다음과 같이 추가해주자.

```bash
sudo vim /etc/security/limits.conf
```

```text+
* hard nproc 4096
* soft nproc 4096
```

여기서 hard와 soft의 차이가 궁금할 수 있는데, 잘 설명된 포스트가 있다. <https://lannstark.tistory.com/101>

설정을 적용하려면 재부팅해야 한다. `sudo reboot`으로 재부팅해도 되고, 클라우드 콘솔에서 재부팅해도 된다.

<br><br>

## 6. Elasticsearch 실행

드디어 Elasticsearch를 실행해볼 차례이다.

```bash
./bin/elasticsearch
```

잘 실행됐다면 로그에 다음과 같은 메시지가 출력될 것이다.

```text+
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Elasticsearch security features have been automatically configured!
✅ Authentication is enabled and cluster connections are encrypted.

ℹ️  Password for the elastic user (reset with `bin/elasticsearch-reset-password -u elastic`):
  ★★★★★★★★★★★★★★★★★★★★★★

ℹ️  HTTP CA certificate SHA-256 fingerprint:
  ★★★★★★★★★★★★★★★★★★★★★★

ℹ️  Configure Kibana to use this cluster:
• Run Kibana and click the configuration link in the terminal when Kibana starts.
• Copy the following enrollment token and paste it into Kibana in your browser (valid for the next 30 minutes):
  ★★★★★★★★★★★★★★★★★★★★★★

ℹ️ Configure other nodes to join this cluster:
• Copy the following enrollment token and start new Elasticsearch nodes with `bin/elasticsearch --enrollment-token <token>` (valid for the next 30 minutes):
  ★★★★★★★★★★★★★★★★★★★★★★

  If you're running in Docker, copy the enrollment token and run:
  `docker run -e "ENROLLMENT_TOKEN=<token>" docker.elastic.co/elasticsearch/elasticsearch:8.12.0`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

이렇게 비밀번호와 토큰값을 비롯하여 여러 정보가 출력되는데, 키바나를 사용한다던지 다른 노드를 클러스터에 추가한다던지 하는 등의 작업을 할 때 사용할 수 있다. 일단 지금 단계에서 필요한 값은 아니니 생략하자.

여기에서 elasticsearch에 접속하려면 가장 위의 `Password for the elastic user`에 있는 비밀번호를 사용하면 된다.
curl을 날릴 때 `-u` 옵션을 통해 비밀번호를 입력하면 된다. 이제 잘 실행되는지 확인해보자.

```bash
curl -k -u elastic:[비밀번호] https://localhost:9200
```

```json
{
	"name": "my-elasticsearch-instance",
	"cluster_name": "elasticsearch",
	"cluster_uuid": "3V00Nk6NSKy2DJqshxTsUw",
	"version": {
		"number": "8.12.0",
		"build_flavor": "default",
		"build_type": "tar",
		"build_hash": "1665f706fd9354802c02146c1e6b5c0fbcddfbc9",
		"build_date": "2024-01-11T10:05:27.953830042Z",
		"build_snapshot": false,
		"lucene_version": "9.9.1",
		"minimum_wire_compatibility_version": "7.17.0",
		"minimum_index_compatibility_version": "7.0.0"
	},
	"tagline": "You Know, for Search"
}
```

잘 출력된다!

<br><br>

## 7. 외부 접속 설정

---

오라클 클라우드의 우분투는 내부 방화벽이 있어서, 외부에서 접근하려고 하면 `No route to host` 에러가 발생한다.
VCN의 Security Group 설정 말고도, 리눅스 내부 방화벽 설정도 해주어야 한다.

보통은 ufw가 주로 사용되는 것 같은데, 오라클 클라우드의 우분투에서는 iptables를 사용한다.
다음과 같이 9200번 포트를 오픈해주자.

```bash
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 9200 -j ACCEPT
sudo netfilter-persistent save
```

이후, 다시 외부에서 접속해보자.

```bash
curl -k -u elastic:[비밀번호] https://[PUBLIC IP]:9200
```

```json
{
	"name": "my-elasticsearch-instance",
	"cluster_name": "elasticsearch",
	"cluster_uuid": "3V00Nk6NSKy2DJqshxTsUw",
	"version": {
		"number": "8.12.0",
		"build_flavor": "default",
		"build_type": "tar",
		"build_hash": "1665f706fd9354802c02146c1e6b5c0fbcddfbc9",
		"build_date": "2024-01-11T10:05:27.953830042Z",
		"build_snapshot": false,
		"lucene_version": "9.9.1",
		"minimum_wire_compatibility_version": "7.17.0",
		"minimum_index_compatibility_version": "7.0.0"
	},
	"tagline": "You Know, for Search"
}
```

마찬가지로, 잘 출력된다! 잘 되는게 아주 보기 좋다.

<br><br>

## 8. 마치며

---

elasticsearch는 분산 환경에서 사용됨을 염두에 두고 설계되었기 때문에, 단순한 테스트 및 개발 환경을 구축하는 것만으로도 돈이 쭉쭉 빠져나갈 수밖에 없는 것 같다.
하지만 내 지갑은 소중하니까... 시행착오 끝에 elasticsearch를 프리 티어에 올릴 수 있었다.
