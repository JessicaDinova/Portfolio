<script>
   import ProjectCard from "./ProjectCard.svelte";
   import ArrowsDescription from "./ArrowsDescription.svelte";
   import BorderSticker from "./BorderSticker.svelte";
</script>

<div class="relative h-screen w-full bg-screen-100">
   <div class="relative w-full flex flex-row justify-center items-center gap-16 h-full">
      <div class="flex flex-col items-center">
         <ProjectCard 
            image="boatParking"
            title="Boat Haven"
            link="#boatHaven"
            rotation="rotate-[10deg]"
            on:click
            />

         <BorderSticker
            topOfset="mt-[-1.5rem]"
            leftOfset="ml-[2rem]"
            imageSticker="boatSticker"
            stickerHeight="h-12"
         />

         <ArrowsDescription
            leftREM="ml-[0rem]"
            topREM="mt-[-7rem]"
            description="First gig"
            imageArrow="firstGig"
            imageHeight="h-16"
         />
      </div>

      <div class="flex flex-col items-center">
         <ProjectCard
            image="curiousVillage"
            title="Curious Village"
            link="#curiousVillage"
            on:click
         />
         <BorderSticker
            leftOfset="ml-[-15rem]"
            topOfset="mt-[-2rem]"
            imageSticker="villageLeft"
            stickerHeight="h-20"
         />

         <BorderSticker
            leftOfset="ml-[15rem]"
            topOfset="mt-[14rem]"
            imageSticker="villageRight"
            stickerHeight="h-20"
         />

         <ArrowsDescription
            leftREM="ml-[15rem]"
            topREM="mt-[19rem]"
            description="First game"
            imageArrow="firstGame"
            imageHeight="h-16"
            flexType="flex-row-reverse"
         />
      </div>

      <div class="flex flex-col items-center">
         <ProjectCard
            image="looney"
            title="Looney"
            link="#looney"
            rotation="rotate-[-8deg]"
            on:click
            />
            

         <BorderSticker
            topOfset="mt-[-1.8rem]"
            leftOfset="ml-[-2rem]"
            imageSticker="looneyTop"
            stickerHeight="h-[3.5rem]"
         />

         <ArrowsDescription
            leftREM="ml-[20rem]"
            topREM="mt-[-5rem]"
            description="Hand drawn"
            imageArrow="handDrawn"
            imageHeight="h-20"
            flexType="flex-col"
         />
      </div>

      <div class="flex flex-col items-center">
         <ProjectCard
            image="screensaver"
            title="''Screensaver''"
            link="#screensaver"
            rotation="rotate-[15deg]"
            on:click
         />

         <BorderSticker
            leftOfset="ml-[18rem]"
            topOfset="mt-[0rem]"
            imageSticker="screensaverLeft"
            stickerHeight="h-20"
         />

         <BorderSticker
            leftOfset="ml-[-17.4rem]"
            topOfset="mt-[12rem]"
            imageSticker="screensaverRight"
            stickerHeight="h-[4.5rem]"
         />

         <ArrowsDescription
            leftREM="ml-[19rem]"
            topREM="mt-[13rem]"
            description="Hackathon"
            imageArrow="hackathon"
            imageHeight="h-28"
            flexType="flex-col-reverse"
         />
      </div>
      <img
      class="absolute z-50 h-48 mt-[33.5rem] mr-[81rem]"
      src="doodles/queen.png"
      alt="arrow" />
   </div>
</div>
