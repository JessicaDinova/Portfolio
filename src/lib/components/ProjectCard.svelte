<script>
    export let image;
    export let title;
    export let link;

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
<div class="relative w-64 h-[17rem] bg-cream-100 flex flex-col-reverse gap-5 px-[0.6rem] pb-3 items-center justify-center hover:scale-105 duration-100 hover:cursor-pointer">
    <div class="text-center">
        <h1 class="text-3xl font-light">{title}</h1>
    </div>
    <div>
        <img
        src="../src/lib/components/img/{image}.png"
        alt="project"
        />
    </div>
</div>
</a>