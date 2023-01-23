---
title: Merge Branch
date: 2022-06-30
excerpt: 브랜치 병합
categories:
  - '동아리교육'
  - 'git'
coverImage: '/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg'
coverWidth: 16
coverHeight: 9
---

<center>

![PIC](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/%EB%8F%99%EC%95%84%EB%A6%AC%EA%B5%90%EC%9C%A1/%EB%A6%AC%ED%84%B4%2022-S%20%EC%8A%A4%ED%84%B0%EB%94%94/GIT2/1.png)

</center>

## Merge란?

---

기능별로 Branch를 열심히 나누어 개발을 했다면, 개발된 기능들을 합칠 필요가 있습니다. 이러한 브랜치들을 합치는 작업을 <span style="background-color: #FFF5B1">Merge</span>를 통해 진행할 수 있습니다.

<br><br>

## 브랜치 병합

---

```bash
git clone https://github.com/your-account/rour-repo-name
cd your-repo-name
git branch -a
```

이전 Git Branch 강의에서 푸시하였던 Github의 레포지토리를 클론하는 것부터 시작해 봅시다. 이전 강의 내용대로 잘 진행하였다면 master 브랜치와 여러분이 만든 한 개의 브랜치, 총 두 개의 브랜치가 있을 것입니다.

<br>

```bash
git switch master
touch hello.py
vim hello.py
```

vim을 열어 hello.py를 아래와 같이 수정해주고 커밋합니다.

hello.py

```python
def hello(name):
    print("Hello {}!".format(name))
```

```bash
git add .
git commit -m "hello"
```

<br><br>

```bash
git switch your-branch-name
touch bye.py
vim bye.py
```

마찬가지로, 브랜치를 이동한 뒤 vim을 열어 bye.py를 아래와 같이 수정해주고 커밋합니다.

bye.py

```python
def bye(name):
    print("Bye {}!".format(name))
```

```bash
git add .
git commit -m "bye"
```

<br>

> ![PIC](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/%EB%8F%99%EC%95%84%EB%A6%AC%EA%B5%90%EC%9C%A1/%EB%A6%AC%ED%84%B4%2022-S%20%EC%8A%A4%ED%84%B0%EB%94%94/GIT2/2.png)
>
> vim(vi improved)은 CLI상에서 텍스트를 편집할 수 있는 도구입니다. CLI상에서 간단한 파일 수정을 할 수 있다는 점이 유용합니다.
>
> vim이 익숙하지 않은 경우 Visual Studio Code 등 다른 텍스트 에디터를 이용하여 수정하여도 상관없습니다.
>
> vim창이 켜지고 a키를 누르면 파일을 수정할 수 있고, 수정 후 Esc를 누른 뒤 `:wq`를 입력하면 파일이 저장됩니다.
>
> 좋은 개발자라면 vim이나 nano같은 텍스트 에디터와 친숙해지는 것도 중요합니다!

<br>

이제 두 브랜치를 병합해봅시다. HEAD를 master 브랜치로 옮긴 뒤, `git merge` 명령어를 입력합니다.

```bash
git switch master
git merge -m "your-merge-message" your-branch-name
git push
```

위 명령어를 입력하면, 여러분이 생성한 브랜치가 master 브랜치에 병합됩니다. `git merge` 명령어는 파라미터로 입력된 브랜치를 현재 브랜치에 병합합니다. -m 플래그를 통해 병합시 입력될 커밋 메시지를 입력할 수 있습니다.

`ls` 명령어를 입력하여, `hello.py` 파일과 `bye.py` 파일이 master 브랜치에 모두 존재하는 것을 확인해 봅시다.

<br>

깃허브의 푸쉬된 레포지토리에 접속해 봅시다. 페이지 상단의 Insight > 좌측 Network 탭으로 이동합니다. 커밋 이력이 시각화된 모습을 확인할 수 있을 것입니다.

<br>

<center>

![PIC](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/%EB%8F%99%EC%95%84%EB%A6%AC%EA%B5%90%EC%9C%A1/%EB%A6%AC%ED%84%B4%2022-S%20%EC%8A%A4%ED%84%B0%EB%94%94/GIT2/3.PNG)
_이 사진이랑은 조금 다를 수도 있음요_

</center>

<br><br>

## 충돌 해결

---

새로운 브랜치를 만들어서 추가적인 작업을 진행해 봅시다.

```bash
git branch your-branch-name-2
git switch your-branch-name-2
vim hello.py
vim bye.py
git add .
git commit -m "Emphasize"
```

hello.py

```python
def hello(name):
    print("Hello {}!!!!!".format(name))
```

bye.py

```python
def bye(name):
    print("Bye {}!!!!!".format(name))
```

<br>

이후, 다시 master 브랜치로 이동하여 bye.py 파일만 바꿔봅시다.

```bash
git switch master
vim bye.py
git add .
git commit -m "Farewell"
```

bye.py

```python
def bye(name):
    print("Farewell {}!".format(name))
```

<br>

이와 같은 작업 후, master 브랜치에서 merge를 다시 진행해 봅시다.

```bash
git merge -m "your-merge-message" your-branch-name-2
```

<br>

<center>

![PIC](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/%EB%8F%99%EC%95%84%EB%A6%AC%EA%B5%90%EC%9C%A1/%EB%A6%AC%ED%84%B4%2022-S%20%EC%8A%A4%ED%84%B0%EB%94%94/GIT2/4.PNG)

</center>

<br>

위 사진처럼, bye.py 파일에서 Conflict가 발생했다는 문구가 발생합니다. bye.py 파일을 확인해 봅시다.

<span>bye.py</span>

```python
def bye(name):
<<<<<<< HEAD
    print("Farewell {}!".format(name))
=======
    print("Bye {}!!!!!!!!!".format(name))
>>>>>>> new2b
```

<br>

bye.py의 소스 코드가 위처럼 변했습니다. `<<<<<<< HEAD` 와 `=======` 사이에는 현재 (HEAD가 가리키는)브랜치의 변경 사항이 기록되어 있습니다. `=======` 와 `>>>>>>> new2b` 사이에는 병합할 브랜치의 변경 사항이 기록되어 있습니다.

이 변경 사항들 중 master 브랜치의 것을 택할수도, 병합할 브랜치의 것을 택할수도, 양쪽을 적절히 취합할 수도 있습니다. 우리는 양쪽의 변경 사항을 적절히 섞어보겠습니다.

```python
def bye(name):
    print("Farewell {}!!!!!!!!!".format(name))
```

<br>

이렇게 적용할 변경 사항만 남기고, 버릴 변경 사항 및 `<<<<<<< HEAD`, `=======`, `>>>>>>> new2b` 등은 지우도록 합니다.

```bash
git add .
git commit -m "your-merge-message"
```

위의 명령어를 입력하면, 충돌을 제거하여, merge가 성공적으로 끝나게 됩니다.  
또한 `cat hello.py`를 입력하여, hello.py 파일의 내용을 확인해 봅시다.

만약 `git merge` 입력 후, 병합 프로세스를 중단하고 싶은 경우 `git merge --abort`를 입력하면 됩니다.

<br><br>

## 끝!

---

<center>

![PIC](https://raw.githubusercontent.com/junhyuk0801/junhyuk0801.github.io/post-pictures/pictures/%EB%8F%99%EC%95%84%EB%A6%AC%EA%B5%90%EC%9C%A1/%EB%A6%AC%ED%84%B4%2022-S%20%EC%8A%A4%ED%84%B0%EB%94%94/GIT2/5.jpg)

</center>

마크다운으로 포스트 쓰는거 생각보다 쉽지않네여.. 두개 쓰는데 거의 하루+반나절 썼음 허허

git은 여러분이 미래에 저처럼 카레집 하는 게 아니라 개발자가 된다면 무조건 쓰게 되는 기능인 만큼 잘 알아둘 필요가 있습니다. 게다가 branch는 그 중에서도 완전 핵심 기능이니까 생각보다 디테일하게 했네요

하다보면 궁금한거 있을 수도 있는데, 예를들면 비어있는 브랜치 만드는 방법같은거? 그런거 구글에 치면 싹다 나옵니다. 저보다 구글이 백만 천만배는 똑똑함. 구글님이 해결 못해주시는 질문이면 저한테 물어봐도 됩니다. 위에 예제들 진행하다가 막힌다거나 해도 댓글 남겨주세요.
