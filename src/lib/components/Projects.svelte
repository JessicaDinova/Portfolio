<script>
   import ProjectCard from "./ProjectCard.svelte";
   import ArrowsDescription from "./ArrowsDescription.svelte";
   import BorderSticker from "./BorderSticker.svelte";
</script>

<!-- <style>
   .projects:hover {
      background-color: #313131;
      -webkit-transition: background-color 180ms ease-in;
   }
</style> -->

<div id="projects" class="relative projects h-screen w-full bg-screen-100">
   <!-- 




   <!-- <ArrowsDescription
      leftREM="left-[10rem]"
      topREM="top-[146rem]"
      description="First gig"
      imageArrow="firstGig"
      imageHeight="h-16"
   />

   <ArrowsDescription
      leftREM="left-[36rem]"
      topREM="top-[172rem]"
      description="First game"
      imageArrow="firstGame"
      imageHeight="h-16"
      flexType="flex-row-reverse"
   />

   <ArrowsDescription
      leftREM="left-[62.5rem]"
      topREM="top-[149rem]"
      description="Hand drawn"
      imageArrow="handDrawn"
      imageHeight="h-20"
      flexType="flex-col"
   />

   <ArrowsDescription
      leftREM="left-[84rem]"
      topREM="top-[164rem]"
      description="Hackathon"
      imageArrow="hackathon"
      imageHeight="h-28"
      flexType="flex-col-reverse"
   />
   <img
      class="absolute z-50 h-40 left-0 top-[173rem]"
      src="../src/lib/components/img/queen.png"
      alt="arrow"
   /> -->
   <div
      class="relative w-full flex flex-row justify-center items-center gap-16 h-full"
   >
      <div class="flex flex-col items-center">
         <ProjectCard image="boatParking" title="Boat Haven" />

         <BorderSticker
            topOfset="mt-[-1.5rem]"
            imageSticker="boatSticker"
            stickerHeight="h-12"
         />
      </div>

      <div class="flex flex-col items-center">
         <ProjectCard
            cardOrder={true}
            image="curiousVillage"
            title="Curious Village"
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
      </div>

      <div class="flex flex-col items-center">
         <ProjectCard image="looney" title="Looney" />

         <BorderSticker
            topOfset="mt-[-1.8rem]"
            imageSticker="looneyTop"
            stickerHeight="h-[3.5rem]"
         />
      </div>

      <div class="flex flex-col items-center">
         <ProjectCard
            cardOrder={true}
            image="screensaver"
            title="''Screensaver''"
         />

         <BorderSticker
            leftOfset="ml-[14rem]"
            topOfset="mt-[-2rem]"
            imageSticker="screensaverLeft"
            stickerHeight="h-20"
         />

         <BorderSticker
            leftOfset="ml-[-14rem]"
            topOfset="mt-[14rem]"
            imageSticker="screensaverRight"
            stickerHeight="h-20"
         />
      </div>
   </div>
</div>
