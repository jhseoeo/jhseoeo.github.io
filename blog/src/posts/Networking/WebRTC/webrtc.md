---
title: WebRTC에 관하여 정리해보았다
date: 2023-01-22
excerpt: 교내 프로젝트, 교과목, 스터디를 하며 정리한 WebRTC 관련 내용을 기록해보았습니다
categories:
  - 'WebRTC'
coverImage: '/post_img/Networking/WebRTC/cover.png'
coverWidth: 16
coverHeight: 9
indexed: true
exposed: true
---

<script>
  import Image from '$lib/components/Image.svelte';
</script>

교내 프로젝트, 교과목, 스터디를 통해 정리한 WebRTC 관련 내용을 기록해보았습니다

<br><br>

## WebRTC

---

### WebRTC란?

- Web Real-Time Communication의 약자
- 별도의 소프트웨어나 플러그인 없이 (**웹 브라우저 만으로도**) 오디오 및 비디오 데이터를 주고받을 수 있음

  - 화상 통화, 실시간 회의 등 구현 가능

- 웹 브라우저 뿐 아니라 IOS, Android Native App 위에서도 동작함
- 구글이 표준화를 주도하고 있어, Chrome 호환성이 제일 좋음
- UDP, 피어-to-피어로 통신함
- 브라우저 API 제공
  - `RTC피어Connection()` : signal 처리, 코덱 처리, p2p 통신, 보안, bandwidth 관리 등, 다양한 역할을 하는 WebRTC 통신 주요 class
  - `getUserMedia()` : 카메라나 마이크 등 장치에 접근하여 유저 데이터를 capture
  - `RTCDataChannel()` : 오디오, 비디오 외의 비정형 데이터를 주고받기 위함. WebSocket과 거의 유사한 api

<br>

### WebRTC 장점

1.  UDP를 사용하여 지연시간이 매우 짧다

    - 카메라로 찍은 화면이 상대에게 도달하기까지 걸리는 시간이 500ms 이하
    - 다른 HTTP Live Stream 기술들의 경우, 주로 영상을 사람들에게 뿌리는(1:N) 용도라서 지연 시간이 존재

2.  Platform and Device Independent

    - 웹브라우저 위에서 돌아가도록 설계되었기 때문에, 브라우저만 돌아가면 OS, 장치가 무엇이든 상관없음

3.  Open-source 및 표준화되어있음

    - 언어별로 표준 문서가 존재하며, 표준대로 진행하면 모두 연결 가능함

4.  네트워크 성능에 따라 품질 조정

    - 네트워크 성능에 따라 전송받는 (영상)데이터의 품질(화질)이 달라질 수 있음
    - 하지만 한 순간에는 특정 해상도의 영상 하나만 받을 수 있음
    - Simulcasting
      - 동시의 여러 해상도의 영상을 보냄
      - bandwidth를 낭비하지만, 수신 장치가 알아서 적합한 품질의 영상 선택

5.  P2P의 장점

    - 주요 데이터가 서버를 경유하지 않기 때문에, 서버 입장에선 부담이 적음
    - 유저 입장에선 내 데이터를 서버가 볼 수 없기 때문에, 안심하고 이용 가능

<br>

### WebRTC 단점

1. Scalability

   - 하나의 세션에 참가하는 통신 대상이 일정 이상 늘어나기 어려움
   - 통신하는 대상의 수가 제한됨
     - 권고에 따르면 최대 50개 (WebRTC expert Tsahi LeventLevi recommends staying shy of any more than 50 concurrent 피어 connections.)
   - 몇 천 명의 유저가 통신하는 경우, live streaming server를 두어 데이터를 분산시킴
     - SFU, MCU 등이 대표적

2. Broadcast Quality

   - WebRTC 자체에 퀄리티 문제는 없지만, Broadcast를 함으로써 발생하는 영상 품질의 하락 문제

3. 그래도 서버가 필요함
   - 두 피어끼리의 connection 생성 및 해제 -> Signaling Server
   - 피어간 통신이 가능한지 여부 또는 Public IP를 확인해야 하는 경우 -> STUN 서버
   - 다양한 네트워크 상의 이슈(방화벽, 공유기나 라우터의 보안 정책 등) 때문에 피어간 직접 통신이 되지 않을 경우 -> TURN 서버를 통해 데이터를 Relay

<br>

### WebRTC 동작 흐름

<Image alt="webrtc signaling architecture" src="/post_img/Networking/WebRTC/2023-01-16-22-07-55.png"/>

1. Signaling Server : 기기 사이에서 커넥션을 생성 및 해제해주고, 통신할 대상을 찾아줌
2. STUN Server : 요청자의 Public IP를 확인
3. TURN Server : P2P로 데이터를 직접 전송할 수 없다면, 데이터를 Relay

자세한 내용은 아래에서 다룰 예정

<br><br>

## SDP

---

### SDP란?

<Image alt="js sdp example" src="/post_img/Networking/WebRTC/2023-01-29-22-15-14.PNG"/>

- Session Description Protocol의 약자 (실질적으로는 프로토콜이 아니긴 함)
- 해상도, 형식, 코덱, 암호화 등, 컨텐츠에 대한 메타데이터 정보
- 누구와 어떻게 대화할지에 대한 정보를 포함함
- SIP(Session Initiation Protocol)를 통해 SDP를 전송
  - SIP는 WebRTC 이전에도 존재하던 사용자/참가자 그룹 간의 연결 설정 프로토콜이며, WebRTC는 SIP를 사용하여 Session 설정

<br><br>

## ICE

---

### ICE란?

- Interactive Connectivity Establishment
- 브라우저가 피어를 통한 연결이 가능하게 해주는 프레임워크
- 두 피어간 **최적의 경로**를 찾아줌 (NAT Traversal)
- 피어끼리 연결이 쉽지 않은 이유

  - 방화벽에 걸리는 경우
  - 장치에 Public IP가 없는 경우
  - 라우터의 보안 정책이 피어간 직접 연결을 막는 경우

- ICE는 STUN서버와 TURN서버를 사용하여 이러한 작업 수행
  - 일반적으로, STUN, TURN 서버까지 거치고 나면 다음과 같은 주소를 얻음
    - Private IP, Port
    - Public IP, Port (through STUN)
    - TURN 서버의 IP, Port(through TURN)

<br>

### ICE Candidates

- WebRTC 피어 연결을 시작하면, 일반적으로 여러개의 candiate들이 각 피어에 의해 만들어짐
- 구분자(`foundation`), IP, 포트, 우선순위, 프로토콜 등으로 구성
- UDP가 기본이지만 UDP가 안되면 TCP도 허용함
- 각 피어가 수집한 ICE Candidates로 패킷을 보내 본 뒤, 가장 latency가 낮고 안정적인 ICE Candidates를 사용

<br>

### Trickle ICE

- 일반적으로 피어는 ICE Candidates를 수집하여 목록을 완성한 후 한꺼번에 교환함
  - 이 방식은 네트워크 지연 등 이유로 ICE Candidates를 수집하는 데 오래 걸릴 수 있음
- 비효율적인 ICE Candidates 교환 작업을 비동기 처리
  - ICE Candidates를 찾은 즉시 피어에게 전송

<br><br>

## Signaling

---

### NAT?

<Image alt="port forwarding" src="/post_img/Networking/WebRTC/2023-01-17-00-20-14.png"/>

- Network Address Translation
- 일반적인 사용자의 네트워크 환경에서는 대부분 공유기를 두기 때문에 Private IP, Public IP가 각각 존재함
  - (일반적인 경우) 한 대의 공유기에 여러 대의 장치가 연결되고, 따라서 한 개의 Public IP와 여러 개의 Private IP가 존재함
- 이 때 NAT는 Public IP를 특정 Private IP로 매핑시킴
  - 다만 연결된 장치 개수만큼 여러 대의 Private IP가 Public IP에 매핑될 필요가 있기에, PAT도 함께 적용
  - NAT + PAT(포트포워딩이라고도 함)는 Public IP:특정 포트를, 특정 Private IP:특정 포트로 매핑시킴
  - 위 그림에서 Public IP:80으로 요청을 보내면, 192.168.0.37을 가진 장치가 80번 포트로 요청을 받을 것

<br>

### STUN

- Session Traversal Utilities for NAT
- 기본적으로, NAT 환경에서 사용자 장치는 자신의 Public IP를 알 수 없음
- STUN 서버는 사용자의 Public IP를 알려주는 역할
  - <https://ipip.kr>에 접속하면 Public IP를 알 수 있음. 이와 유사한 역할
- STUN을 통해 사용자가 P2P UDP 통신을 위해 사용할 수 있는 IP주소와 포트번호를 찾아냄

<br>

### TURN

- Traversal Using Relays around NAT
- 상대 Peer에게 보낼 정보를 TURN 서버에 전달하고, TURN이 상대 Peer에게 전달해줌
- Symmetric NAT 등, Router의 NAT으로 생기는 제약 조건 등을 우회함
- 오버헤드가 발생하지만 대안이 없는 경우 사용
- SFU, MCU도 TURN 서버의 일종이라고 볼 수 있음

<br>

### P2P vs SFU vs MCU

<Image alt="data flow diagram of each realy server" src="/post_img/Networking/WebRTC/2023-01-29-23-58-14.png"/>

- P2P

  - 각 사용자는 (전체 사용자-1) 만큼의 업로드/다운로드 연결을 가짐
  - 서버의 부담이 덜하며 지연시간이 가장 짧음
  - 통신에 참여하는 사용자가 많아질수록 클라이언트의 워크로드가 급격히 증가함
  - 1:1 통신 및 소규모의 1:N, N:N 통신에 적합

- SFU

  - 각 사용자는 한 개의 중앙 서버와의 업로드 연결, 그리고 (전체 사용자-1) 만큼의 다운로드 연결을 가짐
  - 지연 시간이 P2P보다는 길지만 MCU보다는 빠름
  - 데이터가 서버를 거치기 때문에 서버 부담이 존재
  - 클라이언트의 워크로드를 줄일 수 있지만, 대규모의 N:N 통신에서는 여전히 부하가 심함
  - 1:N 및 대규모가 아닌 N:N 통신에 적합

- MCU

  - 각 사용자는 한 개의 중앙 서버와의 업로드/다운로드 연결을 가짐
  - 클라이언트 부담 최소화
  - 데이터가 서버를 거쳐, 각 클라이언트들에게 데이터를 처리하여 분배해야 하기 때문에 서버 부담이 매우 크며 지연 시간이 길어짐
  - 대규모 N:N 통신에 적합

<br>

### Signaling Server

<Image alt="webrtc signaling process" src="/post_img/Networking/WebRTC/2023-01-30-01-11-14.png"/>

- 기기 사이에서 연결 생성 및 해제
- 통신할 대상을 찾아주는 역할
- SDP나 ICE Candidates 등 연결 생성을 위한 데이터가 각 피어에게 전달됨
- Websocket, HTTPS 등 서로 다른 통신 프로토콜로 설계 가능

<br><br>

## 출처

WebRTC : <https://wormwlrm.github.io/2021/01/24/Introducing-WebRTC.html>

<br><br>
