<script>
  import "../app.css";
  import Nav from "$lib/Nav.svelte";
  import Toc from "$lib/TableOfContents.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/github.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Overpass"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Fira+Mono"
  />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Black+Han+Sans&family=Cute+Font&family=Do+Hyeon&family=Dokdo&family=East+Sea+Dokdo&family=Gaegu&family=Gamja+Flower&family=Gothic+A1&family=Gugi&family=Hi+Melody&family=Jua&family=Kirang+Haerang&family=Nanum+Brush+Script&family=Nanum+Gothic&family=Nanum+Gothic+Coding&family=Nanum+Myeongjo&family=Nanum+Pen+Script&family=Noto+Sans+KR&family=Noto+Serif+KR&family=Poor+Story&family=Single+Day&family=Song+Myung&family=Stylish&family=Sunflower:wght@300&family=Yeon+Sung&display=swap"
  />
</svelte:head>

<div class="app">
  <Nav />
  <Toc />
  <div class="g-app-wrapper">
    <div class="contents">
      <slot />
    </div>
    <footer class="site-footer">
      © 2022 JHSeo. All rights reserved. <br /><br />
    </footer>
  </div>
</div>

<style>
  .app {
    background-color: #f1f2f3;
    display: grid;
    grid-template-rows: 51px auto;
    grid-template-columns: 1fr 2fr 1fr;
    width: 100%;
    align-items: start;
    justify-items: center;
  }
  .g-app-wrapper {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding: 10px;
  }
  .contents {
    position: relative;
    max-width: 50vw;
    min-height: 100%;
    margin-bottom: 80px;
  }
  .site-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    color: #aaa;
    border-top: 1px solid #ddd;
    font-size: 0.8em;
  }
</style>
