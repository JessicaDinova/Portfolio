<script>
    import BorderSticker from "./BorderSticker.svelte";
    import Project from "./Project.svelte";
    export let y;
</script>

<style>
    .projectsIn {
       background-color: #F4F0ED;
       transition: background-color 380ms ease-in;
    }
 </style>

<div
    id="curiousVillage"
    class="relative h-screen w-full bg-screen-100 flex justify-center items-center {y > 2910 ? 'projectsIn' : ''}"
>
    <div
        class="flex flex-row-reverse w-full justify-center items-center gap-48 mt-3"
    >
        <div>
            <BorderSticker
                leftOfset="ml-[-2.5rem]"
                topOfset="mt-[-2.5rem]"
                imageSticker="villageLeft"
                stickerHeight="h-24"
            />
            <BorderSticker
                leftOfset="ml-[26rem]"
                topOfset="mt-[21rem]"
                imageSticker="villageRight"
                stickerHeight="h-24"
            />
            <Project image="curiousVillageFull" scale="h-96" />
        </div>

        <div class="text-left">
            <h1 class="text-5xl mb-3 font-serif">Curious village</h1>
            <p class="text-[2rem] font-light">
                My first project in school was to create an<br />educational
                game concerning data safety<br />for children. Our game was
                voted the best<br />one from the whole class which was my<br
                />first little victory.<br />During this project I learned the
                basics of<br />working agile.
            </p>
        </div>

        <BorderSticker
            leftOfset="ml-[7rem]"
            topOfset="mt-[-28rem]"
            imageSticker="cupDoodle"
            stickerHeight="h-40"
            opacity="opacity-100"
        />
        <BorderSticker
            leftOfset="ml-[-30rem]"
            topOfset="mt-[31rem]"
            imageSticker="controllerDoodle"
            stickerHeight="h-40"
            opacity="opacity-100"
        />
    </div>
</div>
