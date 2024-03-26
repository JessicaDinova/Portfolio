<script>
    import Stars from "./Stars.svelte";
</script>

<div class="relative h-screen w-full bg-cream-100 flex justify-center items-center">
    <div class="relative flex flex-col w-full items-center">
        <h1 class="text-left text-6xl font-light">Hello, I am<span class="font-drawn text-[3.5rem] text-lavander-100 pl-4 pr-1 font-black" style="text-shadow: 0px 1px, 1px 0px, 1px 1px">Jessica</span></h1>
        <p class="text-right text-3xl font-light">
            Wannabe graphic designer and web<br />developer
        </p>
        <div>
            <Stars
                leftOfset="ml-[-35rem]"
                topOfset="mt-[-20rem]"
                starNumber="One"
                starHeight="h-[6rem]"
            />

            <Stars
                leftOfset="ml-[-43rem]"
                topOfset="mt-[8rem]"
                starNumber="Two"
                starHeight="h-[6.5rem]"
            />

            <Stars
                leftOfset="ml-[35rem]"
                topOfset="mt-[4rem]"
                starNumber="Three"
                starHeight="h-[11rem]"
            />

            <Stars
                leftOfset="ml-[-8rem]"
                topOfset="mt-[-2rem]"
                starNumber="Four"
                starHeight="h-[4rem]"
            />

            <Stars
                leftOfset="ml-[5rem]"
                topOfset="mt-[-14rem]"
                starNumber="Four"
                starHeight="h-[4rem]"
            />

            <Stars
                leftOfset="ml-[26rem]"
                topOfset="mt-[-12.5rem]"
                starNumber="One"
                starHeight="h-[6rem]"
            />
        </div>
    </div>
</div>
