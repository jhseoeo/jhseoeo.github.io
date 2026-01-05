---
title: RDS로 Postgresql 인스턴스 설정 과정
date: '2023-02-28'
excerpt: RDS로 Postgresql 인스턴스를 띄우며 정리한 내용들을 써보았습니다
categories:
  - 'AWS'
  - 'RDS'
  - 'Database'
coverImage: '/post_img/Cloud/AWS/RDS/cover.jpg'
coverWidth: 16
coverHeight: 9
indexed: true
exposed: true
---

<script>
  import Image from '$lib/components/Image.svelte';
</script>

## RDS란?

---

RDS는 MySQL, PostgreSQL, Oracle, Microsoft SQL Server, Amazon Aurora와 같은 다양한 데이터베이스 엔진을 클라우드 환경에서 쉽게 구축, 운영, 확장할 수 있도록 지원하는 Amazon Web Services의 관리형 관계형 데이터베이스 서비스이다.

데이터베이스 인스턴스를 생성하고 구성하는 프로세스를 자동화함으로써 개발자와 시스템 관리자가 데이터베이스를 관리하는 데 필요한 대부분의 작업을 간소화한다. 또한 백업, 복원, 패치, 모니터링 및 확장과 같은 관리 작업을 수행하는 데 필요한 다양한 기능을 제공한다.

이 뿐만 아니라 RDS는 보안, 가용성, 확장성 등에 대한 기본적인 지원을 제공하기 때문에 사용자가 애플리케이션에 필요한 데이터베이스 서비스를 쉽게 사용할 수 있다. 이러한 요소들로 인해 RDS는 클라우드 환경에서 안전하고 신뢰할 수 있는 데이터베이스가 된다.

<br><br>

## VPC 설정

---

<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-17-49-45.png"/>  
<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-17-50-27.png"/>  
<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-18-02-47.png"/>  
<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-18-05-11.png"/>  
<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-18-05-37.png"/>

- VPC
- 서로 다른 AZ의 Subnet _세 개_
- Internet Gateway
- 인바운드 포트로 `22`, `80`, `25432` 세 개 뚫어놓은 Security Group

> rds cluster를 만들 때 서로 다른 AZ에 속하는 subnet이 최소 세 개 필요  
> 5432가 postgresql 기본 포트이고, 25432는 추후 연결시 변경한 포트

[여기를 참조하여](https://tech.cloud.nongshim.co.kr/2018/10/16/4-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0vpc-subnet-route-table-internet-gateway/) VPC는 위와 같이 세팅해놓았다.

<br>

<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-17-45-50.png"/>
만들어진 vpc에 Actions > Edit VPC settings 해서 DNS setting을 모두 체크해주었다. 아마 Public Access할 때 필요한 옵션이다.

<br><br>

## EC2 Instance 생성

---

<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-14-20-02.png"/>
<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-14-20-57.png"/>  
EC2 특이사항은 없고 생성할 때 VPC, SG에 등록해준다.

<br><br>

## RDS 생성

---

주요 설정은 아래 사진과 같다.

<br>

### 데이터베이스 버전

<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-12-24-05.png"/>  
PostgreSQL로 인스턴스를 생성할 것이며, 기본 버전인 PostgreSQL 13.7-R1로 생성하였다.

<br>

### Template 및 Availability

<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-12-05-06.png"/>  
프로덕션용/개발용 여부인지에 따라서 Production이랑 Dev/Test 중 골라서 선택해주면 될 듯 하다.

그 아래 Deployment options은 Multi-AZ cluster, Multi-AZ instance, single instance 세 개의 option이 있다.

single instance는 당연히 하나의 인스턴스만 띄우는 것인데 반해, Multi-AZ가 붙은 옵션은 AZ에 문제가 생기는 경우를 상정하여 다른 AZ에 스탠바이 인스턴스를 띄운다.

multi-AZ cluster에서는 writer 인스턴스와 reader 인스턴스가 분리되어 있으며, 쓰기 작업은 writer 인스턴스, 읽기 작업은 reader 인스턴스에서 진행된다. 반면 Multi-AZ instance나 Single Instance에서는 하나의 인스턴스에서 읽기/쓰기가 모두 진행된다.

| 항목          |       Multi-AZ cluster        |        Multi-AZ instance         |
| :------------ | :---------------------------: | :------------------------------: |
| 인스턴스 타입 |   read/write 인스턴스 분리    |     read/write 인스턴스 통합     |
| 인스턴스 수   |    reader 2개 + writer 1개    |     active 1개 + standby 1개     |
| 비용          | **비쌈**<br>($0.804 per hour) | **덜 비쌈**<br>($0.441 per hour) |
| autoscaling   |            불가능             |               가능               |
| 언제 쓸까?    |  서비스가 더 커질 것을 전망   |        돈 아끼고 싶을 때         |

<br>

### Authentification Settings

<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-14-32-43.png"/>  
master username, master password를 설정해준다.

<br>

### Instance Type

<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-14-35-07.png"/>
인스턴스 타입이나 스토리지 타입을 적절히 설정해준다. 마찬가지로 아래 표로 정리하였다.

|       |     용도      |            상황             |
| ----- | :-----------: | :-------------------------: |
| db.m~ |     범용      |        일반적인 경우        |
| db.r~ | 메모리 최적화 | 저장하는 데이터가 많은 경우 |
| db.t~ |  CPU 버스트   | 읽기/쓰기 빈도가 높은 경우  |

|                           |     용도      |            상황             |
| ------------------------- | :-----------: | :-------------------------: |
| General Purpose SSD (gp2) |     범용      |        일반적인 경우        |
| General Purpose SSD (gp3) | 범용 + 확장성 | 일반적인 경우 + 확장 가능성 |
| Provisioned IOPS (io)     |  I/O 최적화   | 읽기/쓰기 빈도가 높은 경우  |
| Magnetic                  |  Deprecated   |         쓰지마세용          |

<br>

### Connectivity

<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-14-41-18.png"/>
<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-14-43-59.png"/>
EC2에 직접 연결을 하면 public access가 블록된다. public access를 허용하려면 EC2에 연결하지 않고 public access를 허용해주면 되며, VPC 및 SG를 설정해주면 EC2에서도 연결이 가능하다. 추가로 사진엔 반영되지 않았는데 포트까지 25432로 변경해보았다.

additional configuration에 cloudwatch 설정같은 것도 있는 듯 하니, 필요하다면 설정해도 될 듯 하다.

이후 인스턴스를 생성하면 얼마 후 연결이 가능할 것이다.

<br><br>

## RDS 접속

이제 접속이 잘 되는지 확인해보자.

---

### (EC2에서) RDS 연결

만약 public access를 활성화했다면 로컬에서도 연결이 가능하다. 비활성화 했다면 EC2에서만 접근이 가능하다.

우선 EC2 인스턴스에 postgresql client를 설치해주자. postgresql client가 설치되어 있다면 이 과정은 생략해도 좋다.

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install postgresql-client
```

rds 인스턴스의 접속 엔드포인트를 확인한 후, 다음과 같은 명령어로 rds 인스턴스에 접속한다.
만약 인스턴스를 생성할 때 Multi-AZ cluster로 생성하였다면 writer의 엔드포인트로 접속해야 한다.

```bash
psql \
--host=<엔드포인트> \
--port=<포트번호> \
--username=<사용자명> \
--password \
--dbname=postgres
```

> dbname의 postgres는 PostgreSQL의 마스터 유저로, 초기 접속시에는 postgres로 접속해야 한다.

<br>

접속했다면, 데이터베이스를 생성하고 다시 접속하여 테스트 데이터를 만들어보자.

```sql
create database mydb;
\q;
```

```bash
psql \
--host=<엔드포인트> \
--port=<포트번호> \
--username=<사용자명> \
--password \
--dbname=mydb
```

```sql
create table mytable (
    id int not null primary key,
    name varchar(20) not null
);
insert into mytable values (1, 'ㅎㅇ');
```

<br>

> Multi-AZ cluster라면 `\q`로 나간 후 reader로 재접속하여 endpoint로 rds에 접속해서 확인해보자.
>
> ```bash
> psql \
> --host=<엔드포인트> \
> --port=<포트번호> \
> --username=<사용자명> \
> --password \
> --dbname=mydb
> ```

```sql
select * from mytable;
```

<br>

### gui tools

[어느 블로그 포스트](https://americanopeople.tistory.com/316)를 보니 모니터링 툴 중 TablePlus란 게 그렇게 좋다고 한다. 써보니 우분투는 아직 알파 릴리즈라 오류가 좀 나는 듯.

<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-20-57-47.png"/>

보이는 필드들을 모두 채워주면 된다.

<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-20-59-27.png"/>

<br>

접속하고 나서 이것저것 시도해보니 이렇게 데이터를 보여줍니다.

<Image alt=" " src="/post_img/Cloud/AWS/RDS/2023-01-06-21-07-07.png"/>

<br><br>

### ORM 연결

ORM으로 Python의 SQL Alchemy를 써서 연결해보았다.

```python
from sqlalchemy import create_engine
from dotenv import load_dotenv
from sqlalchemy.orm import sessionmaker
import os

load_dotenv()

HOST = os.environ.get("DB_HOST")
PORT = os.environ.get("DB_PORT")
ID = os.environ.get("DB_ID")
PW = os.environ.get("DB_PW")
DB = os.environ.get("DB_DB")

URL = "postgresql://{}:{}@{}:{}/{}".format(ID, PW, HOST, PORT, DB)

db = create_engine(URL)
Session = sessionmaker(db)
session = Session()

rows = session.execute("SELECT * FROM mytable")
for row in rows:
    print(row)

session.close()
```

모델 코드 짜기 귀찮아서 로우쿼리 날렸는데 잘 받아와진다.
