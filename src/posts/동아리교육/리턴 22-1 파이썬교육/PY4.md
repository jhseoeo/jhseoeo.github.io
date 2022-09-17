---
title: 4. GUI Programming
date: 2022-04-01
excerpt: implement GUI with tkinter
---

<iframe width="800" height="500" src="https://www.youtube.com/embed/zXF6vrFqjmE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</br></br>

<details markdown="1">
<summary>예제 1 [tkinter]</summary>

Drag&Drop이 가능한 tkinter button을 설계합니다<br>
Drag event : &lt;B1-Motion&gt;<br>

<br>

<details markdown="1">
<summary>정답</summary>

<pre><code class="lang-py">
import tkinter as tk

def on_drag_start(event):
    widget = event.widget
    widget._drag_start_x = event.x
    widget._drag_start_y = event.y

def on_drag_motion(event):
    widget = event.widget
    x = widget.winfo_x() - widget._drag_start_x + event.x
    y = widget.winfo_y() - widget._drag_start_y + event.y
    widget.place(x=x, y=y)

root = tk.Tk()
root.resizable(width=False, height=False)
root.geometry("800x600")

button = tk.Button(root, width=20, height=20, text="응애", font="24pt")
button.place(x=60, y=60)
button.bind("&lt;Button-1&gt;", func=on_drag_start)
button.bind("&lt;B1-Motion&gt;", func=on_drag_motion)

root.mainloop()
</code></pre>
</details></details>

</br>

<details markdown="1">
<summary>예제 2 [String Method]</summary>

아래 구문을 실행하였을 때 어떤 결과가 출력될 지 예상하시오<br>

<pre><code class="lang-py">
s = "-----     Hello world      -----"
s.strip('-').strip().swapcase().count('L')
</code></pre>

<details markdown="1">
<summary>정답</summary>

<pre><code class="lang-py">
    3
</code></pre>
</details></details>

</br>

<details markdown="1">
<summary>예제 3 [Conditional Statement]</summary>

한 자리수 또는 두 자리수 자연수를 입력받아 이를 한글로 표기하는 코드를 작성하시오.

입력 예시

<pre><code class="lang-py">
    convertKorean(24)
    convertKorean(60)
    convertKorean(9)
    convertKorean(0)
    convertKorean(100)
</code></pre>

출력 예시

<pre><code class="lang-py">
    이십사
    육십
    구
    범위에서 벗어났어요
    범위에서 벗어났어요
</code></pre>

<details markdown="1">
<summary>정답</summary>

<pre><code class="lang-py">
def getKorean(num):
    if num == 1:
        return '일'
    elif num == 2:
        return '이'
    elif num == 3:
        return '삼'
    elif num == 4:
        return '사'
    elif num == 5:
        return '오'
    elif num == 6:
        return '육'
    elif num == 7:
        return '칠'
    elif num == 8:
        return '팔'
    elif num == 9:
        return '구'

    return '뭐임'


x = int(input())

if x <= 0 or x >= 100:
    print("범위를 벗어났어요")

else:
    ten = x//10
    one = x % 10

    if ten > 1:
        print(getKorean(ten), end='')

    if ten != 0:
        print(end="십")

    print(getKorean("원"))
</code></pre>

getKorean 함수는 배열의 인덱스를 이용하면 훨씬 간단하게 구현 가능합니다.

</details></details>

</br>

<details markdown="1">
<summary>예제 4 [Math Module]</summary>

![Polar](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1p569xyGBCJcMoVoo7-7L2-XNOexkDQ5niw&usqp=CAU)

님들 미분적분학에서 배울거^^

극좌표계는 위 그림과 같이, 반지름r과 각(θ)으로 표현된다. <br>
r은 극(원점)에서의 거리를 의미하고, <br>
θ는 0°(직교 좌표계의 x축 양의 방향에 해당)에서의 각도를 의미한다. <br>

극좌표계에 위치한 한 점(r, θ)을 <br>
직교 좌표계의 한 점(x, y)으로 바꾸기 위한 공식은 다음과 같다.<br>
𝑥= 𝑟cos⁡𝜃<br>
𝑦= 𝑟sin⁡𝜃

사용자로부터 반지름(r), 각도(°)를 입력받아 입력한 위치에 해당하는 <br>
극좌표계의 점을 직교좌표계의 좌표(x, y)로 출력하는 프로그램을 작성하시오.

입력 예시

<pre><code class="lang-py">
    Enter r: 5
    Enter degree: 90

    Enter r: 5
    Enter degree: 180
</code></pre>

츨력 예시

<pre><code class="lang-py">
    (0.0, 5.0)

    (-5.0, 0.0)
</code></pre>

</br>

<details markdown="1">
<summary>정답</summary>

<pre><code class="lang-py">
import math

def convertX(r, degree):
    return r * math.cos(math.radians(degree))
    # 또는, rad = deg * pi / 180 인 것을 이용해도 된다.
    # return r * math.cos(degree * math.pi / 180)

def convertY(r, degree):
    return r * math.sin(math.radians(degree))


r = float(input("Enter r: "))
degree = float(input("Enter degree: "))

print("({0:.1f}, {1:.1f})". format(convertX(r, degree), convertY(r, degree)))
</code></pre>
</details></details>
