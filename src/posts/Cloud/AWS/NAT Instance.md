---
title: 넘나 비싼 NAT Gateway 대신 NAT Instance를 사용해서 Lambda에서 인터넷에 액세스하기
date: '2023-07-08'
excerpt: 가장 저렴하게 Lambda에서 인터넷에 액세스하는 방법
categories:
  - 'AWS'
  - 'AWS Kinesis Video Stream'
  - 'WebRTC'
coverImage: '/post_img/Cloud/AWS/NAT_Instance/cover.png'
coverWidth: 16
coverHeight: 9
indexed: true
exposed: true
---

## Lambda에서 인터넷 액세스하기 (희망편)

---

Lambda를 사용해서 간단한 서비스를 만들고 있던 중, Lambda에서 외부에 있는 REST API를 호출해서 써야 하는 상황이 생겼다.
Lambda는 EC2처럼 Elastic IP를 할당받아서 쓸 수 있는 리소스가 아니다 보니, VPC 내에서 인터넷에 접속할 수 있게끔 설정해줘야 한다.

하지만 앞서 말한 대로 Lambda는 EC2처럼 Elastic IP를 할당받아서 쓸 수 있는 리소스가 아니다!
단순히 Route Table에서 트래픽을 Internet Gateway로 보내는 것만으로는 Lambda가 인터넷에 접속할 수 없다.
아마 네트워크 인터페이스(eni)를 고정으로 람다에 박아둘 수 없기 때문에 private ip가 없고, public ip도 없는 상태이기 때문일 것이다.

그러다 보니 나처럼 인터넷 액세스가 필요한 경우, 일반적으로는 NAT Gateway라는 것을 만들어서 사용하게 된다.

<br>

![Alt text](/post_img/Cloud/AWS/NAT_Instance/1.png)

NAT Gateway는 우리가 일반적으로 아는 공유기의 역할과 비슷하다. Private Subnet의 리소스에서 인터넷에 접속하려는 경우 NAT Gateway를 거치면서 Public IP를 할당받고 인터넷에 접속하게 된다.

설정하는 방법도 어렵지 않다. Public Subnet에 NAT Gateway를 하나 만들고, Private Subnet의 Route Table에서 트래픽 방향을 NAT Gateway로 지정해주면 된다.

![Alt text](/post_img/Cloud/AWS/NAT_Instance/2.png)

이후, Public Subnet의 Route Table에서는 트래픽을 Internet Gateway로 보내주면 된다.

![Alt text](/post_img/Cloud/AWS/NAT_Instance/3.png)

이렇게 설정하면 VPC 설정은 끝나고, 한 단계가 남았다. 바로 Lambda의 권한 설정이다.

![Alt text](/post_img/Cloud/AWS/NAT_Instance/10.png)

위 사진처럼 `Allow: ec2:CreateNetworkInterface`, `Allow: ec2:DeleteNetworkInterface`, `Allow: ec2:DescribeNetworkInterfaces`, 이렇게 세 가지 권한을 Lambda의 Execution Role에 추가해주면 된다.

이렇게 하면 Private Subnet의 Lambda 함수는 NAT Gateway를 거쳐서 인터넷에 접근할 수 있게 된다.

<br>

### (절망편)

그렇게, 대충 이렇게 NAT Gateway를 설정하고 Lambda를 돌리던 어느 날, 청구서를 확인해 보았는데..

![Alt text](/post_img/Cloud/AWS/NAT_Instance/4.png)

![Alt text](/post_img/Cloud/AWS/NAT_Instance/5.png)

![Alt text](/post_img/Cloud/AWS/NAT_Instance/6.png)

![Alt text](/post_img/Cloud/AWS/NAT_Instance/7.png)

아니 세상에..

NAT Gateway는 시간당 0.059달러로, 시간당 0.144달러가 나가는 t2.micro로 돌린 EC2 인스턴스의 4배는 비싼 가격이다.
만일 Lambda가 비는 시간 없이 계속 호출되고 발생하는 트래픽이 꽤 많은 거라면 몰라도, 하루에 두세 번씩만 호출되고 트래픽도 많지 않았던 내 환경에서는 굳이 이렇게까지 비싼 NAT Gateway를 쓸 필요가 없었다.

<br><br>

## 그래서 대안책으로 찾은게 NAT Instance

---

NAT Instance는 굳이 말하자면 오래 전에 사용하던 방식으로, EC2 Instance를 띄워서 NAT Gateway가 하는 일을 하게끔 하는 것이다.
당연히 성능이나 안정성 면에서 NAT Gateway보다 떨어지겠지만, 비용이 훨씬 저렴하다는 장점이 있다. 만약 NAT Instance로 t2.micro를 사용한다면, 앞서 봤던 사진처럼 비용이 4배 가량 절감된다.

설정하는 방법도 어렵지 않다. NAT Gateway를 만드는 대신 EC2 Instance를 만드는데, 장치의 AMI(Amazon Machine Image)를 고를 때 NAT Instance용 이미지를 선택하면 된다.

![Alt text](/post_img/Cloud/AWS/NAT_Instance/8.png)

이렇게 AMI 선택 화면에서 Browse more AMIs를 누르고,

![Alt text](/post_img/Cloud/AWS/NAT_Instance/9.png)

`nat`를 검색하면 NAT Instance용 이미지들을 확인할 수 있다. 이 중 적당히 최신 버전의 AMI를 선택하면 된다. 이후, Elastic IP를 하나 받아서 NAT Instance에 할당해주면 된다.

VPC의 설정은 NAT Gateway를 만들 때와 거의 똑같다! 근데 이제 NAT Instance를 곁들인.. 느낌이라고 보면 된다. NAT Instance는 Public Subnet에 있고, Public Subnet의 Route Table은 Internet Gateway로 트래픽을 보내고, Private Subnet의 Route Table은 NAT Instance로 트래픽을 보내면 된다.

<br><br>

## 돈없는 학생은 어쩔 수 없어요

---

이제 Lambda에서 인터넷에 접속할 수 있게 되었다. 물론 좀 더 싼 비용으로!
실제 배포 환경에서는 NAT Gateway를 써야 한다! 하지만 개발 환경인 경우, 또는 공부 목적으로 사용하는 경우에는 NAT Instance를 쓰면 확실히 비용이 절감되는 이점이 있다. 나처럼 돈 없는 사람들은 이런거 써서 열심히 돈 아끼도록 하자.