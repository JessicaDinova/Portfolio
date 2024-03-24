<script>
    import BorderSticker from "./BorderSticker.svelte";
    import Project from "./Project.svelte";
</script>

<div id="looney" class="relative h-screen w-full bg-cream-100 flex justify-center items-center">
    <div class="flex flex-row w-full justify-center items-center gap-72 mt-16">
        <div class="ml-40">
            <BorderSticker
                leftOfset="ml-[6rem]"
                topOfset="mt-[-2rem]"
                imageSticker="boatSticker"
                stickerHeight="h-16"
            />
            <BorderSticker
                leftOfset="ml-[6rem]"
                topOfset="mt-[31rem]"
                imageSticker="looneyTop"
                stickerHeight="h-16"
            />
            <Project image="looneyFull" scale="h-[33rem]"/>
        </div>
        <div class="text-right">
            <h1 class="text-6xl mb-12 font-serif">Looney</h1>
            <p class="text-[1.7rem] font-light">This application allows users to keep track of<br>their habits, emotions and deepest thoughts<br>that connect to their emotions. We also allowed<br>them to share these thoughts on map if they<br>wish to do so.<br>We also attended a "Dragons Den" which was a<br>knock-off version of Shark Tank. We got all the<br>money and once again, this project won.<br>Did i mention there is also a robot connected to<br>the app?</p>
        </div>
        <BorderSticker
            leftOfset="ml-[-7rem]"
            topOfset="mt-[25rem]"
            imageSticker="dragonDoodle"
            stickerHeight="h-52"
            opacity="opacity-100"/>

            <BorderSticker
            leftOfset="ml-[-75rem]"
            topOfset="mt-[-10rem]"
            imageSticker="robotDoodle"
            stickerHeight="h-40"
            opacity="opacity-100"/>

            <BorderSticker
            leftOfset="ml-[47rem]"
            topOfset="mt-[-30rem]"
            imageSticker="cupDoodle"
            stickerHeight="h-32"
            opacity="opacity-100"/>
    </div>
</div>