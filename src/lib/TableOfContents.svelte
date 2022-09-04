<script>
    import { afterNavigate } from "$app/navigation";
    import Toc from "svelte-toc"
    
    let show = false;
    afterNavigate(() => {
        show = document.getElementsByClassName("postContents").length >= 1
        console.log(document.getElementsByClassName("postContents"))
    })
</script>

{#if show}
    <aside class="toc">
        <Toc headingSelector='.postContents :where(h2, h3)'
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
		width: 400px;
		top: 70px;
        height: min-content;
        border: 1px #DDD solid;
        background-color: #f4f5f6;
        border-radius: 24px;
        margin-top: 50px;
    }
</style>