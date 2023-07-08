---
title: 7. Network Communication
date: 2022-05-13
excerpt: Socket을 통한 네트워크 통신
categories:
  - '동아리교육'
coverImage: '/post_img/동아리교육/22-1_return_python/cover.png'
coverWidth: 16
coverHeight: 9
indexed: false
exposed: false
---

<iframe width="800" height="500" src="https://www.youtube.com/embed/4ISt4I63eso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

<details markdown="1">
<summary>예제 1 [Dictionary]]</summary>

dictionary를 입력으로 받아, Key와 Value의 관계를 뒤집은 dictionary를 반환하는 함수 reverse를 작성하시오.<br>

함수 입력 예시

```python
    {'A': 0, 'B': 1, 'C': 0, 'D': 2, 'E': 2}
```

함수 반환 예시

```python
    {0: ['A', 'C'], 1: ['B'], 2: ['D', 'E']}
```

</details>

<br>

<details markdown="1">
<summary>예제 2 [File, Dictionary]</summary>

파일 score.txt에 한줄에 점수 하나씩 총 20개의 점수가 저장되어 있다.
점수는 0~100점 사이이고 90~100점은 A, 80~90점 미만은 B, 70~80점 미만은 C, 60~70점 미만은 D, 60점 미만은 모두 F이다
score.txt에서 점수를 읽어 dictionary를 생성한다.
key는 학점이고, value에 list로 각각의 점수를 저장한다<br>

score.txt

```python
    95
    83
    87
    100
    65
    72
    43
    85
    77
    66
    88
    91
    54
    79
    98
    21
    100
    79
    68
    92
```

츨력 예시

```python
    ('A', [95, 100, 91, 98, 100, 92])
    ('B', [83, 87, 85, 88])
    ('C', [72, 77, 79, 79])
    ('D', [65, 66, 68])
    ('F', [43, 54, 21])
```

```python
    0 0 0 0 1
    0 0 0 1 1
    0 0 1 1 1
    0 1 1 1 1
    1 1 1 1 1

    0 0 0 0 0 0 0 1
    0 0 0 0 0 0 1 1
    0 0 0 0 0 1 1 1
    0 0 0 0 1 1 1 1
    0 0 0 1 1 1 1 1
    0 0 1 1 1 1 1 1
    0 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1
```

</details>

<br>
