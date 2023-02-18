---
title: Amazon KVS WebRTC signaling channels 사용기
date: '2023-01-01'
excerpt: Amazon KVS WebRTC signaling channel에 대해 알아보자
categories:
  - 'AWS'
  - 'AWS Kinesis Video Stream'
  - 'WebRTC'
coverImage: '/post_img/AWS_KVS_webrtc_signaling_channel/cover.png'
coverWidth: 16
coverHeight: 9
---

<br><br>

## Introduction

---

학교 캡스톤디자인 프로젝트를 진행중인데,
WebRTC 연결 설정 및 단방향 WebRTC 비디오 영상 전달을 위해 AWS Kinesis Video Stream를 사용하게 되었다.
AWS Kinesis Video Stream에 대해 이것저것 조사해보면서 알게 된 것들과, 단방향 WebRTC 비디오 영상 전달 예제를 만들기까지의 과정을 기록해보았다.

<br><br>

## AWS Kinesis Video Stream

---

AWS Kinesis Video Streams는 Fully-Managed AWS 서비스이다.
해당 서비스를 통해 실시간 비디오를 디바이스로부터 AWS 클라우드로 스트리밍하는 데 사용하거나,
실시간 영상 처리나 일괄적인 영상 분석을 하는 어플리케이션을 구축할 수 있다.

먼저, 실시간 또는 녹화된 비디오 스트림은 모바일이나 브라우저 환경에서도 재생할 수 있다.
그리고 WebRTC를 통한 P2P 및 양방향 통신을 지원하기 때문에,
WebRTC로 전송된 Amazon Kinesis Video Streams의 실시간 비디오 스트림을 브라우저 환경에서 재생할 수 있게 된다.
이때 특별한 설정 없이도 WebRTC의 STUN, TURN, ICE 서버의 복잡한 기능 설정을 자동으로 해주기 때문에 유용하다.
특히 P2P를 지원하지 않아 TURN 서버로 데이터를 릴레이 해야하는 경우에도, AWS의 infrastructure를 사용하기 떄문에 백엔드 로드를 줄일 수 있다.

Fully-Managed이기 때문에 Amazon Kinesis Video Streams의 underlying infrastructure에 대하여 고민할 필요가 없어진다.
Amazon Kinesis Video Streams는 스트리밍되는 비디오 데이터가 클수록 매체로부터 스트리밍 데이터를 수집하는데 필요한 underlying infrastructure를 자동으로 provisioning하여 scale up해준다.

<br>

AWS Kinesis Video Streams가 제공하는 서비스는 두 종류로 구분할 수 있다.

<center>

![사진](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/Cloud%20Native/AWS%20Kinesis%20Video%20Stream/AWS%20Kinesis%20Video%20Streaming/1.PNG)

</center>

하나는 real-time 및 batch processing을 위해 Video Streams을 지원하는 서비스이다.
Media source에서 수집한 영상을 sdk를 통해 kinesis video streams로 전송함으로써
비디오 스트림 데이터들이 수집되고, 지속적으로 저장, 암호화, 인덱싱되어 real-time 및 batch processing을 할 수 있다.
이후 단순 비디오 재생 뿐 아니라 video processing, machine learning을 위해 사용할 수 있다.

또 하나는 WebRTC signaling channels을 제공하는 서비스이다.
장치나 웹 플랫폼의 소스로부터 캡쳐된 비디오 스트림 데이터는 WebRTC를 통해 전달되며, Real-time 및 양방향 통신을 지원한다.
따라서 낮은 latency에서 P2P streaming을 할 수 있게 된다.

<br><br>

### Kinesis video stream

Kinesis video stream의 구조는 다음과 같다.

<center>

![사진](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/Cloud%20Native/AWS%20Kinesis%20Video%20Stream/AWS%20Kinesis%20Video%20Streaming/2.PNG)

</center>

Producer는 Kinesis video stream에 비디오 스트림을 넣는 주체로써, 주로 AWS SDK를 통해 데이터를 집어넣는다.

Consumer는 Kinesis video stream에서 읽어온 데이터를 통해 분석하거나 비디오 스트림을 재생하는 역할을 한다.
이 단계에서 real-time 또는 batch processing이 일어날 수 있을 것이다.

Kinesis video stream는 비디오 스트림을 전송하고, 저장하고, processing을 할 수 있게끔 하는 리소스이다.
하나의 producer만 값을 집어넣고, 한 개 이상의 Consumer가 값을 읽어들이는 것이 일반적인 구조이다.

<br><br>

### WebRTC signaling channels

WebRTC signaling channels의 구조는 다음과 같다.

<center>

![사진](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/Cloud%20Native/AWS%20Kinesis%20Video%20Stream/AWS%20Kinesis%20Video%20Streaming/3.PNG)
_출처 : https://tech.cloud.nongshim.co.kr/2021/04/02/매뉴얼-kinesis-video-streams-whith-webrtc-생성하기/_

</center>

Master client가 WebRTC signaling channel을 생성하면,
Master client와 Viewer client는 생성된 WebRTC signaling channel을 통해 서로 데이터를 주고받는다.
각 채널당 하나의 Master, 하나 이상의 Viewer가 존재하는 것이 일반적이다.

<br><br>

### System Requirement

<center>

![사진](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/Cloud%20Native/AWS%20Kinesis%20Video%20Stream/AWS%20Kinesis%20Video%20Streaming/4.PNG)

</center>

Docker 컨테이너나 Raspberry Pi와 같이 제한된 컴퓨팅 능력을 가진 환경에서도
Amazon Kinesis Video Streams을 통해 문제없이 Real-Time Streaming을 수행할 수 있다고 한다.
Amazon Kinesis Video Streams을 사용하면 낮은 시스템 요구사항에서도 서비스를 제공하는 데에는 지장이 없을 것이다.

<br><br>

## Getting Started

---

우리는 위 두 종류의 서비스 중, KVS WebRTC Signaling Channel을 테스트해볼 것이다.

일단 IAM에서 KVS 관련된 권한 설정을 해준다. 본인은 managed policy로 전체 권한을 허용해주었다.

<center>

![사진](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/Cloud%20Native/AWS%20Kinesis%20Video%20Stream/AWS%20Kinesis%20Video%20Streaming/5.PNG)

</center>

<br>

이제, [테스트 페이지](https://awslabs.github.io/amazon-kinesis-video-streams-webrtc-sdk-js/examples/index.html)에서 채널을 생성해보자. 테스트 페이지에 들어가보면 대충 이렇게 생겼다.

<center>

![사진](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/Cloud%20Native/AWS%20Kinesis%20Video%20Stream/AWS%20Kinesis%20Video%20Streaming/6.PNG)

</center>

여기서 Region id 및 AWS Credentials을 적당히 작성해주고, 원하는 Channel Name을 부여한 뒤 _Create Channel_ 버튼으로 채널을 생성해보자.
성공적으로 채널이 생성되었다면, 하단 로그에 `Channel ARN`이 출력되었을 것이다.
그리고 AWS Kinesis Video Streams 대시보드의 Signaling channels 탭에 들어가보면, 채널이 생성된 것을 확인할 수 있다.

<center>

![사진](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/Cloud%20Native/AWS%20Kinesis%20Video%20Stream/AWS%20Kinesis%20Video%20Streaming/7.PNG)

</center>

<br>

이제 생성된 채널에서 통신을 해보자.
브라우저 창을 두 개 키고(같은 컴퓨터에 두 개를 켜도 되지만, 서로 다른 컴퓨터에서 하나씩 키는 게 테스트 환경으로서는 더 적합할 것이다),
설정을 따로 안 건드린 상태에서 각각 하나는 MASTER로, 하나는 VIEWER로 켜볼 것이다.

한 쪽 브라우저에서 먼저 Start Master로 채널을 연 뒤 다른 쪽 브라우저에서 Start Viewer로 채널에 접속하면 된다.
아래 사진은 Master 쪽에서 찍은 사진이다.

<center>

![사진](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/Cloud%20Native/AWS%20Kinesis%20Video%20Stream/AWS%20Kinesis%20Video%20Streaming/8.PNG)

</center>

이후 설정에 따라 비디오 전송 여부, 오디오 전송 여부, Datachannel 생성 여부 등을 결정할 수 있으며,
STUN, TURN 등 사용 여부, Trickle ICE 사용 어부 등을 결정할 수 있다.

<br><br>

## 원본 코드 확인하기

---

이전에 확인했던 [테스트 페이지](https://awslabs.github.io/amazon-kinesis-video-streams-webrtc-sdk-js/examples/index.html)의 소스코드는
[여기](https://github.com/awslabs/amazon-kinesis-video-streams-webrtc-sdk-js/tree/master/examples)에서 확인할 수 있다.

다소 복잡하긴 하지만, `master.js`와 `viewer.js`가 각각 MASTER, VIEWER단에 해당하는 WebRTC 연결 생성을 담당하고,
`createSignalingChannel.js`에서는 채널의 생성을 담당한다.

Signaling Channel에 대해서는 잘 몰라도 WebRTC에 관련된 경험이나 이해가 어느 정도 있다면 어렵지 않게 이해할 수 있을 것이다.
또한, 설정에 따라 코드 진행 바뀌는 부분에 주석이 상세히 달려 있어 이해하기 쉽다.
본인의 경우 프로젝트에 맞게 이 코드를 거의 그대로 활용하여 단방향, Datachannel 생성, Trickle ICE 설정 등을 기본값으로 해주었다.

근데 만약 이 코드를 적당히 수정하여 그대로 사용하면 Access Key를 사용자에게 노출시킬 수밖에 없다는 문제가 있다.
그래서 채널의 생성 등을 백엔드에서 처리하여, 사용자가 직접 채널에 접근할 수 없게끔 분리해주었다.

<br><br>

## 수정된 코드 확인하기

---

[본인 깃허브](https://github.com/junhyuk0801/aws-kvs-webtrtc-signaling-channel-example)에 수정된 코드를 업로드해두었다.
변경점을 하나씩 살펴보자.

<br><br>

### 백엔드

Backend 폴더에 있다.
express로 구현하였으며,
요청 API는 채널 생성, 채널 삭제, MASTER로 채널 정보 받아오기, VIEWER로 채널 정보 받아오기, 이렇게 4개 존재한다.

<br><br>

### 프론트엔드

Frontend 폴더에 있다.
채널의 생성 및 정보 조회 부분이 백엔드로 옮겨간 만큼, 해당 API에 요청을 하기 위한 코드가 별도로 존재하며
`master.js` 및 `viewer.js`에서도 KVS에 직접 조회하는 코드를 제외하고 요청으로 받아온 채널 정보를 통해 WebRTC 연결을 생성하도록 변경해주었다.

현재 프로젝트 스펙에 맞게 단방향 연결을 생성하게끔 설정되어 있는데,
가령 이를 양방향으로 수정하더라도 백엔드 코드를 수정할 필요 없이 프론트엔드쪽 코드만 고치면 된다.

<br><br>

## References

---

AWS KVS  
https://docs.aws.amazon.com/kinesisvideostreams-webrtc-dg/latest/devguide/what-is-kvswebrtc.html

Signaling Channel 그림  
https://tech.cloud.nongshim.co.kr/2021/04/02/%EB%A7%A4%EB%89%B4%EC%96%BC-kinesis-video-streams-whith-webrtc-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0/