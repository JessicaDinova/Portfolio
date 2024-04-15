<script>
    import BorderSticker from "./BorderSticker.svelte";
    import Project from "./Project.svelte";
</script>

<div id="boatHaven" class="relative h-screen w-full bg-screen-100 flex justify-center items-center">
    <div class="flex lg:flex-row flex-col w-full justify-center items-center gap-9 mt-3 lg:mb-0 mb-20">
        <div>
            <BorderSticker
                leftOfset="lg:ml-[20rem] ml-[9rem]"
                topOfset="mt-[-2rem]"
                imageSticker="boatSticker"
                stickerHeight="h-16"
            />
            <Project image="boatHavenFull" scale="lg:h-96 h-48"/>
        </div>
        <div class="lg:text-right text-center text-white">
            <h1 class="lg:text-4xl text-2xl font-serif uppercase">Rent a boat parking space</h1>
            <a target="_blank" href="https://ligplaatsenzeeland.nl"><p class="mt-8 text-xl underline font-light"><span class="highlightDark">lightplaatsenzeeland.nl</span></p></a>
            <p class="lg:text-[1.8rem] text-[1.3rem] font-light lg:text-right text-justify lg:p-0 px-7">
                Me and my buddies got an opportunity to<br class="lg:block hidden">
                <span class="highlightDark">create a website</span>
                for renting boat parking<br class="lg:block hidden">spaces in Zeeland.<br class="lg:block hidden"> Together
                we are currently <span class="highlightDark">still developing</span><br class="lg:block hidden">this website and we are
                really proud of its <br class="lg:block hidden"><span class="highlightDark">functionalities</span>
                and overall <span class="highlightDark">looks</span>.
            </p>
        </div>
        <BorderSticker
            leftOfset="ml-[0rem]"
            topOfset="lg:mt-[33rem] mt-[44rem]"
            imageSticker="boatDoodle"
            stickerHeight="h-24"
            opacity="opacity-100"
        />
    </div>
</div>
