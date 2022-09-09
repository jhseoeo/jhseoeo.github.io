<script>
  import { afterNavigate } from "$app/navigation";
  import Toc from "svelte-toc";

  let show = false;
  afterNavigate(() => {
    show = document.getElementsByClassName("postContents").length >= 1;
  });
</script>

{#if show}
  <aside class="toc">
    <Toc
      headingSelector=".postContents :where(h2, h3)"
      title="Table of Contents"
      keepActiveTocItemInView={true}
      hide={show}
      --toc-active-color="#f1f2f3"
      --toc-active-bg="#717171"
      --toc-active-padding="0px"
      --toc-active-font-weight="0"
    >
      <span let:heading slot="tocItem">
        {heading.innerText}
      </span>
    </Toc>
  </aside>
{/if}

<style>
  .toc {
    grid-column: 3;
    grid-row: 2;
    position: sticky;
    width: 80%;
    top: 100px;
    height: min-content;
    border: 1px #ddd solid;
    background-color: #f4f5f6;
    border-radius: 24px;
  }
</style>
