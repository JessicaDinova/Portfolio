<script>
    import Stars from "./Stars.svelte";
</script>

<div class="relative h-screen w-full bg-cream-100 flex justify-center items-center">
    <div class="h-screen flex flex-col w-full items-center justify-center">
        <h1 class="text-left lg:text-6xl text-4xl lg:font-light">Hello, I am<span class="font-drawn lg:text-[3.5rem] text-[2.2rem] text-lavander-100 pl-4 pr-1 font-black" style="text-shadow: 0px 1px, 1px 0px, 1px 1px">Jessica</span></h1>
        <p class="text-right lg:text-3xl text-[1.2rem] lg:font-light">
            Wannabe graphic designer and web<br />developer
        </p>
        <div>
            <Stars
                leftOfset="lg:ml-[-35rem] ml-[-10rem]"
                topOfset="lg:mt-[-20rem] mt-[-25rem]"
                starNumber="One"
                starHeight="h-[6rem]"
            />

            <Stars
                leftOfset="lg:ml-[-43rem] ml-[-12rem]"
                topOfset="lg:mt-[8rem] mt-[12rem]"
                starNumber="Two"
                starHeight="lg:h-[6.5rem] h-[6rem]"
            />

            <Stars
                leftOfset="lg:ml-[35rem] ml-[5rem]"
                topOfset="lg:mt-[4rem] mt-[-25rem]"
                starNumber="Three"
                starHeight="lg:h-[11rem] h-[7rem]"
            />

            <Stars
                leftOfset="ml-[-8rem]"
                topOfset="mt-[-2rem]"
                starNumber="Four"
                starHeight="h-[4rem]"
            />

            <Stars
                leftOfset="lg:ml-[5rem] ml-[]"
                topOfset="mt-[-14rem]"
                starNumber="Four"
                starHeight="h-[4rem]"
            />

            <Stars
                leftOfset="lg:ml-[26rem] ml-[3rem]"
                topOfset="lg:mt-[-12.5rem] mt-[5rem]"
                starNumber="One"
                starHeight="h-[6rem]"
            />
        </div>
    </div>
</div>
