---
title: 3. Callback, Lambda function, Recursion
date: 2022-03-26
excerpt: Callback, Lambda function, Recursion
---

<iframe width="800" height="500" src="https://www.youtube.com/embed/YP43fn5I9qs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

<details markdown="1">
<summary>예제 1 [String]</summary>
문자열 하나를 인자로 받아 그 문자열이 몇 줄짜리인지 반환하는 함수 lineNum를 작성하시오.
함수 호출 예시

```python
lineNum("Line1\nLine2\nLine3")
lineNum("저번영상\n조회수 3이에요\n시무룩..")
```

함수 반환 예시

```python
3
2
```

<details markdown="1">
<summary>정답</summary>

```python
def lineNum(lines):
    return lines.count('\n') + 1
```

</details></details>
<br>
<details markdown="1">
<summary>예제 2 [String]</summary>

문자열을 뒤집었을 때, 그 결과가 원본과 같은 것을 팰린드롬 문자열 (palindrome)이라고 한다.  
문자열 하나를 인자로 받아 그 문자열이 팰린드롬인지 반환하는 함수 isPalindrome을 작성하시오.  
함수 호출 예시

```python
isPalindrome("tomato")
isPalindrome("level")
```

함수 반환 예시

```python
 False
 True
```

<details markdown="1">
<summary>정답</summary>

```python
def isPalindrome(s):
    return s == [::-1]
```

</details></details>
<br>
<details markdown="1">
<summary>예제 3 [String]</summary>

문자열 두 개를 인자로 받는다. 이 문자열을 a, b라고 할 때 a에서 b를 찾아 <br>
모두 두 번 쓰는 함수 hongzinho를 작성하시오.
함수 호출 예시

```python
hongzinho("2nd grade", "grade")
hongzinho("This test is just a test", "test")
```

함수 반환 예시

```python
"2nd gradegrade"
"This testtest is just a testtest"
```

<details markdown="1">
<summary>정답</summary>

```python
def hongzinho(line, letter):
    return line.replace(letter, letter*2)
```

</details></details>
<br>
<details markdown="1">
<summary>예제 4 [String, Recursion]</summary>

Recursion을 통해 String의 크기를 비교하는 함수 strcmp를 설계한다.

-   string 간의 직접적인 비교 연산 사용 X (len을 통한 길이 비교)
-   chr() : 한 개의 문자(character)의 Unicode code point를 반환하는 함수

함수 호출 예시

```python
strcmp("bcd", "abc"),
strcmp("abc", "abd"),
strcmp("abcd","abc"),
strcmp("abc", "abcd"),
strcmp("abc", "abc")
```

함수 반환 예시

```python
 1
 -1
 1
 -1
 0
```

```python
def strcmp(s1, s2):
"""
s1 > s2일 경우, 1 반환
s1 == s2일 경우, 0 반환
s1 < s2일 경우, -1 반환
"""

### 두 문자열이 일치하는 경우 #####
if len(s1) == 0 and len(s2) == 0:
# ???

### 한 문자열이 다른 문자열의 앞부분만 일치하는 경우 #####
elif len(s1) == 0:
# ???
elif len(s2) == 0:
# ???

### 특정 인덱스의 문자가 일치하지 않는 경우 #####
elif ord(s1[0]) > ord(s2[0]):
# ???
elif ord(s1[0]) # s1 < s2
# ???

### 특정 인덱스의 문자가 일치하는 경우 #####
else:
# ???
```

<details markdown="1">
<summary>정답</summary>

```python

def strcmp(s1, s2):
"""
s1 > s2일 경우, 1 반환
s1 == s2일 경우, 0 반환
s1 < s2일 경우, -1 반환
"""

if len(s1) == 0 and len(s2) == 0:
    return 0
elif len(s1) == 0:
    return -1
elif len(s2) == 0:
    return 1
elif ord(s1[0]) > ord(s2[0]):
    return 1
elif ord(s1[0]) # s1 < s2
    return -1
else:
    return strcmp(s1[1:], s2[1:])

```

</details></details>
<br>
