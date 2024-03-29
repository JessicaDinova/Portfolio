<script>
    export let image;
    export let title;
    export let link;
    export let rotation = "";

    function scrollIntoView() {
        // @ts-ignore
        const el = document.querySelector(this.getAttribute("href"));
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
        });
    }
</script>

<a href="{link}" on:click|preventDefault={scrollIntoView}>
<div class="{rotation} relative w-64 h-[17rem] bg-cream-100 flex flex-col-reverse gap-5 px-[0.6rem] pb-3 items-center justify-center hover:scale-105 duration-100 hover:cursor-pointer">
    <div class="text-center">
        <h1 class="text-3xl font-normal font-drawn" style="text-shadow: 0px 1px, 1px 0px, 1px 1px">{title}</h1>
    </div>
    <div>
        <img
        src="projectImages/{image}.png"
        alt="project"
        class="rotate-0"/>
    </div>
</div>
</a>