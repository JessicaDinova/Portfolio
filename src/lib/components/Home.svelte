<script>
    import Stars from "./Stars.svelte";
</script>

<div class="relative h-screen w-full bg-cream-100 flex justify-center items-center">
    <div class="relative flex flex-col w-full items-center">
        <h1 class="text-left text-7xl font-light">Hello, I am<span class="font-drawn text-6xl text-lavander-100 ml-10 font-extrabold">Jessica</span></h1>
        <p class="text-right text-4xl font-light">
            Wannabe graphic designer and web<br />developer
        </p>
        <div>
            <Stars
                leftOfset="ml-[-40rem]"
                topOfset="mt-[-25rem]"
                starNumber="One"
                starHeight="h-[7rem]"
            />

            <Stars
                leftOfset="ml-[-47rem]"
                topOfset="mt-[8rem]"
                starNumber="Two"
                starHeight="h-[8rem]"
            />

            <Stars
                leftOfset="ml-[35rem]"
                topOfset="mt-[4rem]"
                starNumber="Three"
                starHeight="h-[13rem]"
            />

            <Stars
                leftOfset="ml-[-10rem]"
                topOfset="mt-[0rem]"
                starNumber="Four"
                starHeight="h-[5rem]"
            />

            <Stars
                leftOfset="ml-[5rem]"
                topOfset="mt-[-18rem]"
                starNumber="Four"
                starHeight="h-[5rem]"
            />

            <Stars
                leftOfset="ml-[26rem]"
                topOfset="mt-[-12.5rem]"
                starNumber="One"
                starHeight="h-[7rem]"
            />
        </div>
    </div>
</div>
