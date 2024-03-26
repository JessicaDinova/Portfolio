<script>
    import BorderSticker from "./BorderSticker.svelte";
    import Project from "./Project.svelte";
    export let y;
</script>

<div
    id="boatHaven"
    class="relative h-screen w-full bg-cream-100 flex justify-center items-center {y <
    3590
        ? 'projectsIn'
        : ''}"
>
    <div class="flex flex-row w-full justify-center items-center gap-9 mt-3">
        <div>
            <BorderSticker
                leftOfset="ml-[20rem]"
                topOfset="mt-[-2rem]"
                imageSticker="boatSticker"
                stickerHeight="h-16"
            />
            <Project image="boatHavenFull" scale="h-96" />
        </div>
        <div class="text-right text-white">
            <h1 class="text-5xl mb-12 font-serif">Rent a boat parking space</h1>
            <p class="text-[2rem] font-light">
                Me and my buddies got an opportunity to<br/>
                <span class="highlightDark">create a website</span>
                for renting boat parking<br/>spaces in Zeeland.<br/>Together
                we are currently <span class="highlightDark">still developing</span><br/>this website and we are
                really proud of its<br/><span class="highlightDark">functionalities</span>
                and overall <span class="highlightDark">looks</span>.
            </p>
        </div>
        <BorderSticker
            leftOfset="ml-[0rem]"
            topOfset="mt-[33rem]"
            imageSticker="boatDoodle"
            stickerHeight="h-24"
            opacity="opacity-100"
        />
    </div>
</div>

<style>
    .projectsIn {
        background-color: #313131;
        transition: background-color 380ms ease-in;
    }
</style>
