---
title: Git Branch
date: 2022-06-28
excerpt: 협업을 위한 Branching
categories:
  - '동아리교육'
  - 'git'
coverImage: '/post_img/동아리교육/22-s_return_git/cover.jpeg'
coverWidth: 16
coverHeight: 9
indexed: false
exposed: false
---

<center>

![PIC](/post_img/동아리교육/22-s_return_git//GIT2/5.jpg)  
git 영상 안보고 왔으면 보고 오세요 눈물나려고 하기 전에

</center>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

<center>

![PIC](/post_img/동아리교육/22-s_return_git//GIT1/1.png)

</center>

## Branch란?

---

Git은 협업을 위한 다양한 기능을 제공합니다. 그중, <span style="background-color: #FFF5B1">Branch</span>는 각 개발자마다 기능별로 나누어 개발하기 위해 사용할 수 있는 가장 대표적인 협업 도구라고 할 수 있습니다.

Branch를 통해 여러 작업들을 병렬적으로, 동시에 진행할 수 있게 됩니다. 기능 추가, 버그 수정 등의 작업 내역들이 각각의 브랜치에 기록되며, 각 브랜치에 기록된 작업 내역들을 하나로 합칠 수도 있습니다.

이렇게나 유용한 Branch를 사용하기 위한 방법을 알아보도록 합시다.

<br><br>

## 브랜치 생성, 전환

---

먼저, 로컬 레포지토리를 생성하여 파일을 생성한 후 커밋합니다.

```bash
mkdir your-repo-name
cd your-repo-name
git init
touch file1.txt
git add .
git commit -m "Add file1.txt"
```

<br>

현 상태에서, 아래 명령어를 입력하여 출력된 결과를 확인해 봅시다.

```bash
git branch
```

아마 <span style="background-color: #FFF5B1">master</span>라는 출력을 확인하시게 될 것입니다.
master는 레포지토리를 생성할 때부터 만들어지는 브랜치로, 가장 기본이 되는 브랜치입니다. 브랜치를 추가하지 않고 작업 내용을 커밋한다면, 해당 커밋들은 이 master 브랜치에 저장됩니다.

`git branch` 명령어는 현재 어떠한 브랜치에 위치해 있는지 출력합니다. 우리는 현재 생성된 레포지토리에서 아무런 브랜치도 추가로 생성하지 않았으므로, master 브랜치에 있게 됩니다. 또한 bash 쉘에서 경로 바로 옆에 어떤 브랜치에 위치해 있는지 표시되는 것을 확인할 수 있습니다.

이렇게 현재 위치한 브랜치를 가리키는 것이 <span style="background-color: #FFF5B1">HEAD</span>입니다. 기본적으로 HEAD는 master의 가장 마지막 커밋을 가리키며, 명령어를 입력하여 이를 변경할 수 있습니다.

<br>

<center>

![PIC](/post_img/동아리교육/22-s_return_git//GIT1/2.PNG)

</center>

<br>

```bash
git branch your-branch-name
git switch your-branch-name
```

새로운 브랜치를 생성하려면 `git branch your-branch-name`과 같이, `git branch` 뒤에 파라미터로 생성할 브랜치의 이름을 붙입니다. 이렇게 하면 브랜치가 생성되지만, HEAD가 생성된 브랜치로 전환되지는 않습니다. `git switch`, 또는 `git checkout` 명령어는 HEAD를 명시된 브랜치로 이동시킵니다.

성공적으로 브랜치가 전환되었다면, `git branch` 명령어를 입력해 봅시다. master 브랜치와 생성한 브랜치가 모두 출력되는 것을 확인할 수 있습니다.

<br>

<center>

![PIC](/post_img/동아리교육/22-s_return_git//GIT1/3.PNG)

</center>

<br>

전환된 브랜치에서 임의의 작업 후 커밋한 뒤, master 브랜치로 되돌아가 봅시다.

```bash
touch file2.txt
git add .
git commit
git switch master
ls
```

새로 생성한 file2.txt는 사라지게 됩니다. 이는 master 브랜치에서 file2.txt를 생성하지 않았기 때문입니다. file2.txt는 여러분이 생성한 브랜치에만 존재하는 작업 내용이므로, master 브랜치에 존재하지 않습니다. 즉, master 브랜치와 여러분이 생성한 브랜치는 독립적인 작업 공간이 됩니다.

<br>

> 만약 여러분이 file2.txt를 생성하고 커밋하지 않았다면, 다시 해당 브랜치로 되돌아갔을 때 file2.txt가 나타나지 않게 됩니다. 브랜치는 커밋 단위로 적용된다는 것을 기억해두세요!

<br>

각각 master 브랜치와 금방 생성한 브랜치에서 새로운 브랜치를 생성해 봅시다.

```bash
git branch new-branch1
git switch your-branch-name
git branch new-branch2
git branch
```

이제, 각각의 새로 생성된 브랜치에서 출력된 파일 목록을 확인해봅시다.

```bash
git switch new-branch1
ls
git switch new-branch2
ls
```

<br>

new-branch1에서는 file1.txt만, 이후 생성한 new-branch2에서는 file2.txt도 함께 출력될 것입니다.  
왜 이런 결과가 나왔을까요?

이는 브랜치를 생성할 때, 현재 HEAD가 가리키는 브랜치를 기준으로 분기하기 때문입니다. 따라서 생성되는 브랜치는 현재 HEAD가 가리키는 브랜치의 마지막 커밋과 같은 커밋을 공유하게 됩니다.

따라서, new-branch1은 master와 같이 file1.txt만 포함된 상태이며, new-branch2는 여러분이 앞서 생성한 브랜치처럼, file2.txt도 포함한 상태인 것입니다.

<br><br>

## 브랜치 수정, 삭제

---

```bash
git switch master
git branch devleop
```

실수로 생성할 브랜치 이름에 오타를 내고 말았습니다.

<br>

```bash
git branch -d devleop
git branch develop
git branch
```

또는

```bash
git branch -m devleop develop
git branch
```

<br>

이런 경우, 위와 같이 입력하여, 브랜치 이름을 수정할 수 있습니다. 전자의 경우, 잘못 생성한 브랜치를 삭제하고 다시 만드는 과정입니다. 후자의 경우, 브랜치명을 수정하는 명령어입니다.

이와 같은 명령어들을 사용하여 브랜치를 삭제하거나, 브랜치 이름을 수정할 수 있습니다.

<br><br>

## 작업 내용 임시 저장

---

```bash
git switch master
git touch file123.txt
git touch file234.txt
git touch file345.txt
...
```

master 브랜치에서 열심히 작업중이던 도중, 다른 브랜치의 소스코드를 잠시 참조해야 할 일이 생겼습니다. master 브랜치의 작업 내용을 커밋하지 않으면, 작업 중이던 내용이 모두 사라져버리고 맙니다. 하지만 아직 완료되지 않은 작업인지라, 커밋하기는 좀 애매합니다. 이런 경우 어떻게 해야 할까요?

<br>

```bash
git add .
git stash
git switch your-branch-name
ls
...
git switch master
git stash pop
ls
```

아직 완료되지 않은 작업 내용을 임시 저장하려면 `git stash` 명령어를 사용합니다. `git stash` 명령어를 입력한 뒤, `git switch`를 통해 브랜치를 전환합니다. 이후 원래의 브랜치로 돌아온 뒤, `git stash pop` 명령어를 입력하면 아까 작업중이었던 작업 내용이 복원됩니다.

<br><br>

## 푸시하기

---

<center>

![PIC](/post_img/동아리교육/22-s_return_git//GIT1/4.png)

</center>

```bash
git remote add origin https://github.com/your-account/rour-repo-name
```

브랜치를 이용하여 개발한 프로젝트를 깃허브에 푸시하고자 합니다. 먼저 Github에서 레포지토리를 생성한 뒤, 레포지토리 주소를 로컬 레포지토리에 추가해줍니다.

<br>

이제, HEAD를 master 브랜치로 옮겨 깃허브에 푸시해봅시다.

```bash
git switch master
git push -u origin master
```

`git push` 명령어의 `-u`라는 플래그는 현재 로컬 레포지토리의 브랜치를 원격 레포지토리의 어느 브랜치에 푸시할지 설정합니다.

이 때 `git push -u origin master`에서 origin은, 앞서 `git remote add` 명령어를 통해 추가한 깃허브의 주소입니다.
또한 `git push -u origin master`에서 master는 푸시할 원격 저장소의 브랜치명입니다. 해당 명령어를 실행한 이후, 깃허브에 master 브랜치가 생성된 것을 확인하실 수 있습니다.

<br>

<center>

![PIC](/post_img/동아리교육/22-s_return_git//GIT1/5.png)

</center>

<br>

한번 -u 플래그를 통해 푸시한 이후에는, `git push`만 입력해도 이전에 설정한 브랜치로 푸시할 수 있습니다.

위처럼 HEAD를 master 브랜치에 놓고 푸시한 경우, master 브랜치의 커밋들만 깃허브에 푸시됩니다. 다른 브랜치에 저장된 커밋 이력들을 푸시하려면 HEAD를 해당 브랜치로 옮긴 후 푸시해줘야 합니다.

```bash
git switch your-branch-name
git push -u your-branch-name
```

<br>

<center>

![PIC](/post_img/동아리교육/22-s_return_git//GIT1/6.PNG)

</center>

<br>

원격 레포지토리에 브랜치가 추가된 것을 확인할 수 있습니다.
