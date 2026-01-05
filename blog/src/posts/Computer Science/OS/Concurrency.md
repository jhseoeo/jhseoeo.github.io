---
title: '동시성 관련 개념 정리'
date: 2023-08-18
excerpt: Concepts about concurrency
categories:
  - 'Computer Science'
  - 'OS'
  - 'Golang'
coverImage: '/post_img/Computer Science/OS/Concurrency/cover.png'
coverWidth: 16
coverHeight: 9
indexed: true
exposed: true
---

<script>
    import Highlight from '$lib/components/Highlight.svelte';
    import Image from '$lib/components/Image.svelte';
</script>

**Effective Concurrency in Go**를 읽던 중, 동시성 관련해서 좋은 내용들이 많이 나와서 한 번 개념을 정리해보았읍니다.

- 본 포스트 안에서 쓰레드와 고루틴을 혼용해서 사용했는데, 얼추 비슷한 애들이라고 생각하시면 됩니다.

<br><br>

## 동시성(Concurrency) vs 병렬성(Parallelism)

---

### 동시성(Concurrency)

- 여러 작업을 동시에 수행하는 것**처럼 보이는 것**  
  실제로는 여러 작업을 **동시에 수행하는 것이 아니라, 짧은 시간 간격으로 번갈아가며 수행하는 것**이다.  
  싱글 코어에서도 동시성을 구현할 수 있음.

- 엄밀한 정의는, **결과에 영향을 주지 않고, 프로그램의 서로 다른 부분이 partial order 또는 순서에 관계없이 실행될 수 있는 것**을 의미함.  
  프로그램이 A,B,C로 구성되어 있을 때, A,C,B 또는 B,C,A 등로 실행되어도 결과에 영향을 주지 않는다면, 이 프로그램은 동시성을 가지고 있다고 할 수 있음.

### 병렬성(Parallelism)

- 여러 작업을 **동시에 수행하는 것**  
  실제로 여러 작업이 **동시에 수행됨**  
  멀티 코어, 즉 서로 다른 CPU 코어에서 돌아가는 프로세스나 쓰레드가 이에 해당함.

### 동시성과 병렬성의 차이

동시성은 프로그램이 <Highlight>작성되는 방식</Highlight>에 관련된 것이고, 병렬성은 프로그램이 <Highlight>실행되는 방식</Highlight>에 관련된 것이다.

<br><br>

## 동시성 프로그래밍

---

- 문제를 실행 단위로 나누어 time sharing 또는 병렬적으로 실행될 수 있게끔 하는 것
- 이들은 서로 병렬적으로 또는 인터리빙(interleaving)되어 실행될 수 있으며, 메시지를 통해 통신할 수 있음.
- 따라서 동시성 프로그래밍은 객체지향이나 함수형 프로그래밍처럼, 프로그램을 작성하는 방식이라고도 할 수 있음.

### Time Sharing과 Context Switching

- 컴퓨팅 리소스(주로 CPU)를 여러 프로그램이 공유하는 것.
- 어떤 프로세스가 여러 쓰레드로 구성되어 있다 할 때, 한 쓰레드가 일정한 time quantum 동안 CPU를 사용하고, 그 다음 쓰레드가 CPU를 사용하는 방식으로 진행됨.
  - 이를 <Highlight>Context Switching</Highlight>이라고 함.
  - 쓰레드의 실행 컨텍스트에는 해당 쓰레드의 state(레지스터 값, 프로그램 카운터, Stack Pointer 등)가 저장되어 있음.
  - Context Switching이 발생하면, 현재 쓰레드의 state가 저장되고, 다음 쓰레드의 state가 복원됨.
- **Preemptive Thread Scheduling**에서는 쓰레드가 실행되는 도중 Context Switching이 발생할 수 있음.
- **Non-Preemptive Thread Scheduling**(**Cooperative Threading**)에서는 쓰레드가 실행을 마칠 때까지 Context Switching이 발생하지 않음.

> 정보) Go 언어에서는 1.14 이전까지는 Non-Preemptive Thread Scheduling을 사용하였으나, 1.14부터 Preemptive Thread Scheduling을 사용하도록 변경되었다.

- 쓰레드의 상태와 스케줄링
  - 쓰레드가 실행되면 _Ready_ state로 들어가고, CPU를 사용할 수 있을 때 _Running_ state로 들어감.
  - _Running_ state의 쓰레드는 time quantum이 끝나면 다시 _Ready_ state로 돌아감.
  - _Running_ state의 쓰레드가 I/O 작업 등으로 인한 인터럽트가 발생하거나, lock을 획득하지 못하면 _Blocked_ state로 들어감.
  - _Blocked_ state의 쓰레드는 I/O 작업이 끝나거나, lock을 획득하면 다시 _Ready_ state로 돌아가게 되고, 스케줄러에 의해 선택되기를 기다림.
    - 이 때 _Ready_ state의 쓰레드가 바로 실행되리라는 보장은 없음.

### 동시성 프로그래밍은 왜 어려운가?

상태 관리의 어려움 때문임

- 각각의 Sequantial Program은 상태(state)를 가지고 있음.
  - state는 Sequantial Program의 실행 위치와 메모리에 저장된 값을 의미함
  - 프로그램의 현재 state에 따라 다음 state를 예측할 수 있음
- 그런데 동시에 여러 프로그램이 실행되면 각각의 Sequantial Program이 가지고 있는 state가 서로 영향을 미칠 수 있음.
- Sequantial Program이 많아질수록, 가능한 state의 수가 많아질수록 전체 프로그램이 가질 수 있는 state의 경우의 수가 기하급수적으로 증가함
  - n개의 state가 있는 Sequantial Program이 m개 실행되면 n^m개의 state가 존재함

따라서, 일반적인 state 분석으로 동시성 프로그램의 행동을 예측하기 어려움.

### Happened-Before 관계

- 두 개의 서로 같지 않은 정수가 있다면, 이들의 대소 관계를 알 수 있음.
- 마찬가지로 한 Sequantial Program에서 발생한 서로 다른 두 이벤트가 있다면, 한 이벤트는 반드시 다른 이벤트보다 먼저 발생했을 것임.
  - 이를 <Highlight>Total Order</Highlight>라고 함.
- 서로 다른 프로세스에서 발생한 이벤트에 순서를 정하는 것은 불가능하지만, Message Passing 등을 통해 이벤트의 순서를 일부 정의할 수 있음.
  - 이를 <Highlight>Partial Order</Highlight>라고 함.

### Dining Philosopher Problem

- 문제 정의

  - 철학자들이 원형 테이블에 앉아있음.
  - 테이블 위에는 포크가 5개 놓여있음.
  - 철학자들은 생각을 하다가 배가 고파지면 양 옆의 포크를 집어들어 먹기 시작함.
  - 식사를 마치면 포크를 내려놓고 다시 생각을 하기 시작함.

- Deadlock 발생 가능성

  - 모든 철학자가 자신의 왼쪽 포크만을 집어든 상태라면, 모든 철학자는 다음 포크를 집어들기 위해 오른쪽 철학자가 포크를 내려놓기를 기다려야 함.
  - 이 상태에서는 모든 철학자가 포크를 내려놓기를 기다리는 상태로 무한 대기 상태에 빠짐.
  - 한 철학자가 자신의 포크를 내려놓지 않는 이상, 다른 철학자들은 포크를 집어들 수 없음.

<br><br>

## Shared Memory와 Message Passing

---

### 관련 Computer Architecture 지식

- UMA(Uniform Memory Access)

  - 메모리에 접근할 때 모든 프로세서가 동일한 권한을 가지고 있음.
  - 동일한 메모리 액세스 버스가 공유되기 때문에 처리량이 감소할 수 있음.

- NUMA(Non-Uniform Memory Access)

  - 프로세서는 메모리의 특정 영역에 대해서만 접근 권한을 가짐
  - OS가 프로세서에서 필요한 메모리를 해당 영역에 할당함으로써 전용 메모리 액세스 버스를 사용할 수 있기 때문에 처리량이 증가할 수 있음.

- 대부분의 프로세서는 캐시 메모리를 사용하며, 캐시 일관성(Cache Coherence) 프로토콜을 사용하여 캐시 메모리의 일관성을 유지함.

- 현대 프로세서는 메모리 read 및 write가 완료될 때까지 기다리지 않음. 파이프라이닝(Pipelining)을 통해 다음 명령어를 동시에 실행함.
  - 이 때 파이프라이닝의 최적화를 위해서 컴파일러가 명령어의 순서를 바꿀 수 있음.
  - 그래서 한 쓰레드에서 읽은 메모리의 값이 다른 쓰레드에서 쓰인(write) 값이라고 확신할 수 없음.
    - 따라서 컴파일러 및 프로세서가 모든 변경사항을 메모리에 커밋(commit)하는 방법이 필요함.
    - 메모리 배리어(Memory Barrier)는 가장 저수준의 메모리 일관성 프로토콜로, 프로세서와 컴파일러에 특정 순서 제약을 강제함. 메모리 배리어 이전에 실행되는 모든 작업은 반드시 메모리 배리어 이후에 실행되는 명령어보다 먼저 완료되어야 함.
    - Go의 채널, Atomic 연산, 뮤텍스, condition variable 등은 모두 메모리 배리어를 사용함.

### Shared Memory

- 단일 프로그램 내에서 Shared memory란 일반적으로 여러 쓰레드가 공유하는 변수 등의 메모리 공간을 의미함.

- Shared Memory를 통해 통신하는 경우 버그가 발생할 수 있는 가능성이 높아짐.
  이 때 동시성으로 인해 발생하는 버그는 사실상 무작위적으로 발생하기에, 버그를 재현 및 디버깅하기가 어려움.

- lock을 통해 Happened-Before 관계를 정의함

### Message Passing

- UNIX나 LINUX의 철학은 프로세스가 서로 독립적이어야 하며, 메시지를 송수신하는 방식으로 통신해야 한다는 것임.

  - 프로세스는 한 종류의 일을 잘 하도록 설계되며, 이러한 프로세스들이 모여 시스템을 구성함.

- 메시지를 통홰 Happened-Before 관계를 정의함. (메시지 패싱을 통해 두 쓰레드는 작업의 선후 관계를 정의할 수 있음)

### Hybrid Approach

- Shared Memory와 Message Passing을 혼용하는 방식
- 보통 Shared Memory는 빠르고 활용성이 좋지만 data race가 발생할 수 있는 위협이 있음. 이러한 경우 Message Passing을 사용함.
- 하지만 의도치 않게 메모리를 공유되는 경우가 발생할 수 있음.

- Golang에서의 접근 방식
  - 어떤 고루틴이 데이터 객체를 채널로 전달하면, 해당 데이터 객체의 소유권을 잃음.
  - 해당 채널에서 데이터 객체를 꺼낸 고루틴이 소유권을 가짐.
  - 채널로 데이터 객체를 전달한 고루틴은, mutual exclusion을 충족시키지 않는 한 해당 데이터 객체에 다시 접근할 수 없음.

<br><br>

## Atomicity, Race, Deadlock, Starvation

---

### Race Condition

- 동시성 프로그램의 실행 순서 및 타이밍에 따라 실행 결과가 달라지는 것.
- 각 쓰레드가 인터리빙되어 실행되기 때문에 발생함.
- 이상적이지 않은 결과가 발생할 수 있음.
- 실질적으로 재현이 어려움.

- **Data race**는 다음과 같은 항목에 해당하는 Race Condition의 특수한 케이스임.
  - 두 개 이상의 쓰레드가 동일한 메모리에 접근함
  - 한 개 이상의 쓰레드가 메모라에 쓰기 연산을 수행함
  - 두 쓰레드의 작업 순서를 보장하기 위한 동기화 및 lock이 없음

### Atomicity

- 어떤 작업 및 그 하위 작업이 실행될 때 모두 완료되거나, 아니면 전혀 실행되지 않는 것을 의미함.
- 프로그램의 특정 영역에 반드시 한 쓰레드만 접근할 수 있게 하는 **Critical Section**을 사용하여 구현할 수 있음.
  - Mutual Exclusion(Mutex)를 통해 **Critical Section**을 설정함.
  - 여러 shared object와 상호작용해야 하는 경우, Mutex의 사용이 복잡해짐.
    - 상황에 따라 Deadlock이 발생할 수도 있음.

### Deadlock

- 두 개 이상의 쓰레드가 서로의 작업이 끝나기를 기다리는 상황
- Deadlock이 발생하려면 Coffman 조건이 충족되어야 함.

  - Mutual Exclusion: 한 쓰레드가 Critical Section에 들어가면, 다른 쓰레드는 해당 Critical Section에 들어갈 수 없음.
  - Hold and Wait: 쓰레드는 어떤 자원을 점유한 상태에서, 다른 쓰레드가 점유한 자원을 기다림.
  - No Preemption: 쓰레드는 점유한 자원을 다른 쓰레드가 강제로 빼앗을 수 없음.
  - Circular Wait: 쓰레드 간에 자원을 순환적으로 기다림.

- Deadlock을 예방하기 위해 shared resoruce에 대한 일관된 lock 순서를 정의할 수 있으나, 모든 Deadlock을 예방할 수는 없음.

> 정보) Go에서는 모든 Goroutine이 Block된 상태이면 Deadlock이 발생했다고 판단하고, panic을 발생시킴.
> 그래서 모든 Goroutine이 아닌 일부 Goroutine에서만 Deadlock이 발생했다면 이를 감지하지 못함.

### Starvation

- 일부 쓰레드가 Critical Section에 들어가기 위해 계속해서 기다리지만, 다른 쓰레드가 먼저 Critical Section에 들어감으로 인해 Critical Section에 지속적으로 접근하지 못하는 상황
- DoS(Denial of Service) 공격의 기본 원리임.

> 정보) Go 런타임은 특정 Goroutine이 Starvation 상태에 빠지는 것을 감지하지는 못한다.

### Livelock

- Deadlock처럼 보이지만, 쓰레드가 lock을 획득하려고 시도하는 연산을 계속 반복하기 때문에 실제로는 차단된 쓰레드가 없는 상황
- 쓰레드가 작동하더라도 실제로는 유의미한 작업을 수행하지 못하기 때문에, Starvation과 유사함.
- Livelock은 몇번 반복하다 보면 해결될 수 있기 때문에 확인하기 어려움.
- lock을 획득하기 위해 재시도 및 무작위적인 대기 시간을 추가하는 방법으로 해결할 수 있음.

<br><br>

## References

---

<center>

[
<Image alt="Effective Concurrency in Go" src="https://learning.oreilly.com/covers/urn:orm:book:9781804619070/400w/"/>
](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)<br>
[Burak Serdar, 『Effective Concurrency in Go』, Packt Publishing](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)

</center>
