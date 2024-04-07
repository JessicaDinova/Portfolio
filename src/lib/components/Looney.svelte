<script>
    import BorderSticker from "./BorderSticker.svelte";
    import Project from "./Project.svelte";
</script>

<div id="looney" class="relative h-screen w-full bg-cream-100 flex justify-center items-center">
    <div class="flex lg:flex-row flex-col w-full justify-center items-center lg:gap-72 gap-9 lg:mt-16">
        <div class="lg:ml-40">
            <BorderSticker
                leftOfset="lg:ml-[6rem] ml-[2rem]"
                topOfset="lg:mt-[-2rem] mt-[-1.5rem]"
                imageSticker="boatSticker"
                stickerHeight="lg:h-16 h-12"
            />
            <BorderSticker
                leftOfset="lg:ml-[6rem] ml-[2.5rem]"
                topOfset="lg:mt-[31rem] mt-[16.5rem]"
                imageSticker="looneyTop"
                stickerHeight="lg:h-16 h-12"
            />
            <Project image="looneyFull" scale="lg:h-[33rem] h-[18rem]"/>
        </div>
        <div class="lg:text-right text-justify">
            <h1 class="lg:text-5xl text-3xl lg:mb-12 mb-3 font-serif uppercase lg:text-right text-center">Looney</h1>
            <p class="lg:text-[1.6rem] text-[1.2rem] font-light lg:p-0 px-12">
                This application allows users to keep track of <br class="lg:block hidden">their <span class="highlight">habits,
                emotions </span> and deepest <span class="highlight">thoughts</span><br class="lg:block hidden">that connect to their emotions. 
                We also allowed <br class="lg:block hidden">them to share these thoughts on <span class="highlight">map</span> if they<br class="lg:block hidden">
                wish to do so. <br class="lg:block hidden">We also attended a <span class="highlight">"Dragons Den"</span> which was a<br class="lg:block hidden">
                knock-off version of Shark Tank. We got all the <br class="lg:block hidden"><span class="highlight">"money"</span> and once again, 
                this project won. <br class="lg:block hidden">Did i mention there is also a <span class="highlight">robot</span> connected to<br class="lg:block hidden">
                the app?</p>
        </div>
        <BorderSticker
            leftOfset="lg:ml-[-7rem] ml-[17rem]"
            topOfset="lg:mt-[25rem] mt-[-25rem]"
            imageSticker="dragonDoodle"
            stickerHeight="lg:h-52 h-28"
            opacity="opacity-100"/>

            <BorderSticker
            leftOfset="lg:ml-[-75rem] ml-[-18rem]"
            topOfset="lg:mt-[-10rem] mt-[-10rem]"
            imageSticker="robotDoodle"
            stickerHeight="lg:h-40 h-20"
            opacity="opacity-100"/>

            <BorderSticker
            leftOfset="lg:ml-[47rem] ml-[-17rem]"
            topOfset="lg:mt-[-30rem] mt-[-44rem]"
            imageSticker="cupDoodle"
            stickerHeight="lg:h-32 h-24"
            opacity="opacity-100"/>
    </div>
</div>