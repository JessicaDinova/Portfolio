<script>
    import BorderSticker from "./BorderSticker.svelte";
    import Project from "./Project.svelte";
</script>

<div id="boatHaven" class="relative h-screen w-full bg-screen-100 flex justify-center items-center">
    <div class="flex flex-row w-full justify-center items-center gap-9 mt-3">
        <div>
            <BorderSticker
                leftOfset="ml-[20rem]"
                topOfset="mt-[-2rem]"
                imageSticker="boatSticker"
                stickerHeight="h-16"
            />
            <Project image="boatHavenFull" scale="h-96"/>
        </div>
        <div class="text-right text-white">
            <h1 class="text-5xl mb-12 font-serif">Rent a boat parking space</h1>
            <p class="text-[2rem] font-light">Me and my buddies got an opportunity to<br><mark>create a website</mark> for renting boat parking<br>spaces in Zeeland.<br>Together we are currently still developing<br>this website and we are really proud of its<br>functionalities and overall looks.</p>
        </div>
        <BorderSticker
            leftOfset="ml-[0rem]"
            topOfset="mt-[33rem]"
            imageSticker="boatDoodle"
            stickerHeight="h-24"
            opacity="opacity-100"/>
    </div>
</div>


<style>
    mark {
      background: linear-gradient(
      -100deg,
      hsla(228, 31%, 72%,.3),
      hsla(228, 31%, 72%,.7) 95%,
      hsla(228, 31%, 72%,.1)
      );
      border-radius: 1em 0;
      padding: .3em;
      }
    </style>