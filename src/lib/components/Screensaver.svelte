<script>
    import BorderSticker from "./BorderSticker.svelte";
</script>

<div id="screensaver" class="relative h-screen w-full bg-screen-100 flex justify-center items-center">
    <div class="flex w-full justify-start lg:pl-32 lg:mt-20">
        <div class="lg:text-left text-justify text-white lg:mb-0 mb-64">
            <h1 class="lg:text-5xl text-2xl lg:mb-10 mb-5 font-serif uppercase lg:text-left text-center">"Screensaver"</h1>
            <p class="lg:text-[1.7rem] text-[1.2rem] font-light lg:p-0 px-10">
                My first <span class="highlightDark">hackathon</span> was fun and hectic at the<br class="lg:block hidden">
                same time. Our assigment was to create a<br class="lg:block hidden">
                screensaver for the <span class="highlightDark">biggest screen</span> in Zeeland<br class="lg:block hidden">
                that belongs to <span class="highlightDark">JRCZ.</span> We decided to make a<br class="lg:block hidden">
                rotating globe that would expand by <span class="highlightDark">clapping</span><br class="lg:block hidden">
                your hands. We had to quickly learn how to use<br class="lg:block hidden">
                <span class="highlightDark">Blender and Unity</span> to pull all of this off. In the end<br class="lg:block hidden">
                we were sleep deprived but we enjoyed every <br class="lg:block hidden">second of it.</p>
        </div>
        <BorderSticker
            leftOfset="lg:ml-[40rem] ml-[19rem]"
            topOfset="lg:mt-[-4rem] mt-[-3rem]"
            imageSticker="coffeeDoodle"
            stickerHeight="lg:h-32 h-24"
            opacity="opacity-100"/>

            <BorderSticker
            leftOfset="lg:ml-[20rem] ml-[2rem]"
            topOfset="mt-[27.5rem]"
            imageSticker="energyDoodle"
            stickerHeight="lg:h-24 h-20"
            opacity="opacity-100"/>
    </div>
        <div class="absolute lg:mt-[7.7rem] mt-[35rem] lg:ml-[56.8rem] ml-[5.5rem]">
            <img class="lg:h-[38rem] h-[20rem]" src="projectImages/screensaverFull.png" alt="Project">
        </div>
</div>