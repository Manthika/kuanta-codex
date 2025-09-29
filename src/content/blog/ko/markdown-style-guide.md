---
title: 'H1 데이터 센터: AI 인프라의 핵심'
description: 'Astro에서 Markdown을 사용할 때 참고할 수 있는 기본 문법 샘플을 소개합니다.'
pubDate: 'Jun 19 2024'
heroImage: '../../../assets/blog-header.svg'
lang: ko
translationKey: markdown-style-guide
draft: false
---

Astro 프로젝트에서 Markdown을 작성할 때 자주 활용하는 기본 문법을 예시로 정리했습니다. 각 요소가 어떤 방식으로 렌더링되는지 살펴보면서 콘텐츠에 맞춰 응용해 보세요.

## 제목

HTML `<h1>`부터 `<h6>`까지의 요소는 여섯 단계의 제목을 의미합니다. `<h1>`이 가장 높은 수준의 제목이고 `<h6>`이 가장 낮은 수준입니다.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 문단

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut harios am ex eat.

## 이미지

### 문법

```markdown
![Alt text](./full/or/relative/path/of/image)
```

### 출력 결과

![blog placeholder](../../../assets/blog-placeholder-about.jpg)

## 인용구

`blockquote` 요소는 다른 출처에서 인용한 콘텐츠를 표현할 때 사용합니다. 필요하다면 `footer`나 `cite` 요소 안에 출처를 표시하고, 각주나 약어 등 인라인 변경 사항을 포함할 수 있습니다.

### 출처 없이 사용하는 인용구

#### 문법

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### 출력 결과

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.

### 출처를 포함한 인용구

#### 문법

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### 출력 결과

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 위 인용문은 2015년 11월 18일 Gopherfest에서 Rob Pike가 발표한 [강연](https://www.youtube.com/watch?v=PAAkCSZUG1c)의 일부입니다.

## 표

### 문법

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

### 출력 결과

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## 코드 블록

### 문법

새 줄에서 백틱(```) 세 개를 입력해 코드를 감싸고, 첫 번째 백틱 뒤에 언어 이름을 한 단어로 적으면 해당 언어의 하이라이트가 적용됩니다. 예시는 html, javascript, css, markdown, typescript, txt, bash 등 다양합니다.

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

### 출력 결과

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## 목록 형태

### 순서 있는 목록

#### 문법

```markdown
1. First item
2. Second item
3. Third item
```

#### 출력 결과

1. First item
2. Second item
3. Third item

### 순서 없는 목록

#### 문법

```markdown
- List item
- Another item
- And another item
```

#### 출력 결과

- List item
- Another item
- And another item

### 중첩 목록

#### 문법

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### 출력 결과

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## 기타 요소 — abbr, sub, sup, kbd, mark

### 문법

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

### 출력 결과

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
