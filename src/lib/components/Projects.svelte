<script>
   import ProjectCard from "./ProjectCard.svelte";
   import ArrowsDescription from "./ArrowsDescription.svelte";
   import BorderSticker from "./BorderSticker.svelte";
</script>

<style>
   .projects:hover {
      background-color: #313131;
      -webkit-transition: background-color 180ms linear;
   }
</style>

<div
   id="projects"
   class="projects h-screen w-full bg-cream-100 flex justify-center items-center"
>
   <BorderSticker
      leftOfset="left-[14rem]"
      topOfset="top-[151rem]"
      imageSticker="boatSticker"
      stickerHeight="h-12"
   />

   <BorderSticker
      leftOfset="left-[27.5rem]"
      topOfset="top-[150.5rem]"
      imageSticker="villageLeft"
      stickerHeight="h-20"
   />

   <BorderSticker
   leftOfset="left-[42.5rem]"
   topOfset="top-[166.5rem]"
   imageSticker="villageRight"
   stickerHeight="h-20"
/>

<BorderSticker
leftOfset="left-[54rem]"
topOfset="top-[150.5rem]"
imageSticker="looneyTop"
stickerHeight="h-[3.5rem]"
/>

<BorderSticker
leftOfset="left-[67.5rem]"
topOfset="top-[166.5rem]"
imageSticker="screensaverLeft"
stickerHeight="h-20"
/>

<BorderSticker
leftOfset="left-[82.5rem]"
topOfset="top-[150.3rem]"
imageSticker="screensaverRight"
stickerHeight="h-20"
/>

   <ArrowsDescription
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
   />
   <div class="w-full flex flex-row justify-center items-center gap-16">
      <ProjectCard image="boatParking" title="Boat Haven" />
      <ProjectCard
         cardOrder={true}
         image="curiousVillage"
         title="Curious Village"
      />
      <ProjectCard image="looney" title="Looney" />
      <ProjectCard
         cardOrder={true}
         image="screensaver"
         title="''Screensaver''"
      />
   </div>
</div>
