<div id="top"></div>

<br />
<div align="center">
  <h2 align="center">JHSeo's Svektekit Blog</h2>

  <p align="center">
    본인이 사용중인 Svektekit 개발 블로그 탬플릿입니다
  </p>
</div>

## About The Project

[josh-collinsworth님의 sveltekit-blog-starter](https://github.com/josh-collinsworth/sveltekit-blog-starter)를 일부 수정하여 제작한 블로그 탬플릿입니다.  
Markdown으로 포스트를 작성할 수 있습니다.  
배포된 블로그는 <https://junhyuk0801.github.io/>에서 확인할 수 있습니다.

<br>

### Features

- mdsvex로 포스트 내에 Svelte 컴포넌트 삽입 가능
- 간단한 SEO 지원
- 다크 모드 지원
- sitemap.xml 및 rss.xml 지원

<br>

### Built With

- [Node.js](https://nodejs.org/)
- [Sveltekit](https://kit.svelte.dev/)
- [mdsvex](https://mdsvex.com/)
- [sass](https://sass-lang.com/)
- [giscus](https://giscus.app/)
- [gh-pages](https://github.com/tschaub/gh-pages)

<br>

## Prerequisites

- Node.js 16.x.x or above

<br>

## Getting Started

### 1. Clone Project

프로젝트를 clone하여 실행해봅니다.

```bash
git clone https://github.com/junhyuk0801/junhyuk0801.github.io blog
cd blog
npm i
npm run dev
```

<br>

### 2. Change Configuration

`src/lib/config.js`를 열고 설정을 변경해줍니다.

```javascript
export const siteTitle = 'YOUR BLOG TITLE';
export const siteDescription = 'YOUR BLOG DESCRIPTION';
export const siteURL = 'YOURNAME.github.io';
export const siteLink = 'https://YOURNAME.github.io';
export const siteAuthor = 'YOUR NAME';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 15;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Posts',
		route: '/posts'
	},
	{
		title: 'Categories',
		route: '/category'
	},
	{
		title: 'About',
		route: '/about'
	}
];
```

<br>

### 3. Set Up Github Pages

Github Page를 생성합니다. 자세한 내용은 <https://docs.github.com/en/pages/quickstart>를 참조합니다.

깃허브에서 `YOURNAME.github.io` 레포지토리를 만든 이후, 다음과 같은 명령어를 통해 로컬 레포지토리가 원격 레포지토리를 향하게끔 변경해줍니다.

```bash
git remote delete origin
git remote add origin https://github.com/YOURNAME/YOURNAME.github.io
```

<br>

### 4. Activate Giscus

[Giscus app](https://github.com/apps/giscus)을 원격 레포지토리에 설치해준 후, <https://giscus.app/>에서 giscus의 설정을 변경합니다.

이후 변경된 giscus의 설정을 `src/lib/config.js`에 반영해줍니다.

```javascript
export const giscusConfig = {
	activate: true,
	repo: 'YOUR_REPO',
	repoId: 'YOUR_REPO_ID',
	category: 'YOUR_CATEGORY',
	categoryId: 'YOUR_CATEGORY_ID',
	mapping: 'url',
	lang: 'ko'
};
```

만약 Giscus를 사용하지 않는다면, `activate` 속성을 false로 변경해줍니다.

보다 상세한 설정은 `src/routes/posts/post/[...post]/+page.svelte`에서 할 수 있습니다.

<br>

### 5. Write Down New Post

블로그 포스트는 마크다운으로 쓸 수 있으며, `src/posts` 디렉토리에 작성합니다.
이 때 반드시 `dir/dir/post.md`와 같은 구조로, 두 개의 폴더 안에 마크다운을 작성합니다.

마크다운 포스트 최상단에는 반드시 다음과 같은 frontmatter를 작성합니다.

```yml
---
title: 'Highlighting text using mdsvex'
date: '2021-12-01'
categories:
  - 'sveltekit'
  - 'markdown'
  - 'svelte'
coverImage: '/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg'
coverWidth: 16
coverHeight: 9
excerpt: This post demonstrates how to include a Svelte component in a Markdown post.
---
```

<br>

### 6. Deploy Your Blog

`npm run deploy` 명령어로 블로그를 github page로 배포할 수 있습니다.

만약 처음 배포하는 거라면, 원격 레포지토리의 settings > pages로 이동하여 배포할 브랜치를 `gh-pages`로 변경합니다.
