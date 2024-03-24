<script>
    import BorderSticker from "./BorderSticker.svelte";
</script>

<div id="screensaver" class="relative h-screen w-full bg-screen-100 flex justify-center items-center">
    <div class="flex w-full justify-start pl-44 mt-20">
        <div class="text-left text-white">
            <h1 class="text-5xl mb-11">"Screensaver"</h1>
            <p class="text-[1.5rem]">My first hackathon was fun and hectic at the<br>same time. Our assigment was to create a<br>screensaver for the biggest screen in Zeeland<br>that belongs to JRCZ. We decided to make a<br>rotating globe that would expand by clapping<br>your hands. We had to quickly learn how to use<br>Blender and Unity to pull all of this off. In the end<br>we were sleep depried but we enjoyed every<br>second of it.</p>
        </div>
        <BorderSticker
            leftOfset="ml-[35rem]"
            topOfset="mt-[-4rem]"
            imageSticker="coffeeDoodle"
            stickerHeight="h-32"
            opacity="opacity-100"/>

            <BorderSticker
            leftOfset="ml-[10rem]"
            topOfset="mt-[25rem]"
            imageSticker="energyDoodle"
            stickerHeight="h-24"
            opacity="opacity-100"/>
    </div>
        <div class="absolute mt-[7.7rem] ml-[56.8rem]">
            <img class="h-[38rem]" src="../src/lib/components/img/screensaverFull.png" alt="Project">
        </div>
</div>