<script>
    import BorderSticker from "./BorderSticker.svelte";
    import Project from "./Project.svelte";
</script>

<div id="curiousVillage" class="relative h-screen w-full bg-cream-100 flex justify-center items-center">
    <div class="flex lg:flex-row-reverse flex-col-reverse w-full justify-center items-center lg:gap-48 gap-9 lg:mt-3">
        <div>
            <BorderSticker
                leftOfset="lg:ml-[-2.5rem] ml-[-1rem]"
                topOfset="lg:mt-[-2.5rem] mt-[-1rem]"
                imageSticker="villageLeft"
                stickerHeight="lg:h-24 h-20"
            />
            <BorderSticker
                leftOfset="lg:ml-[26rem] ml-[19.3rem]"
                topOfset="lg:mt-[21rem] mt-[16rem]"
                imageSticker="villageRight"
                stickerHeight="lg:h-24 h-20"
            />
            <Project image="curiousVillageFull" scale="lg:h-96 h-[19rem]" />
        </div>

        <div class="lg:text-left text-justify">
            <div class="flex flex-row gap-4 items-center h-full mb-4">
                <h1 class="lg:text-4xl text-2xl font-serif uppercase lg:text-left text-center">Curious village</h1>
                <a target="_blank" href="https://github.com/HZ-2223/oop-team22">
                    <img class="h-[2rem]" src="doodles/github.png" alt="github">
                </a>
            </div>
            <a target="_blank" href="https://hz-2223.github.io/oop-team22/"><p class="text-xl underline font-light"><span class="highlight">Play the game!</span></p></a>
            <p class="lg:text-[1.8rem] text-[1.3rem] font-light lg:p-0 px-10">
                My first project in school was to create an<br class="lg:block hidden"><span class="highlight">educational
                game</span> concerning data safety <br class="lg:block hidden">for children. Our game was
                voted <span class="highlight">the best</span><br class="lg:block hidden">one from the whole class which was my<br class="lg:block hidden">
                first little <span class="highlight">victory.</span><br class="lg:block hidden">During this project I learned the
                basics of <br class="lg:block hidden">working <span class="highlight">agile</span>.
            </p>
        </div>

        <BorderSticker
            leftOfset="lg:ml-[7rem] ml-[-18rem]"
            topOfset="lg:mt-[-24rem] mt-[-42rem]"
            imageSticker="cupDoodle"
            stickerHeight="lg:h-40 h-16"
            opacity="opacity-100"
        />
        <BorderSticker
            leftOfset="lg:ml-[-30rem] ml-[12rem]"
            topOfset="lg:mt-[31rem] mt-[-1rem]"
            imageSticker="controllerDoodle"
            stickerHeight="lg:h-40 h-16"
            opacity="opacity-100"
        />
    </div>
</div>
