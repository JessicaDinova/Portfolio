<script>
   import ProjectCard from "./ProjectCard.svelte";
   import ArrowsDescription from "./ArrowsDescription.svelte";
   </script>

<div id="projects" class="h-screen w-full bg-screen-100 flex justify-center items-center">
   <ArrowsDescription
      leftREM={15}
      topREM={147}
      description="First gig"
      image="firstGig"
      imageHeight={16}
   />

   <ArrowsDescription
      leftREM={36}
      topREM={170}
      description="First game"
      image="firstGame"
      imageHeight={16}
      flexType="flex-row-reverse"
   />

   <ArrowsDescription
      topREM={149}
      description="Hand drawn"
      image="handDrawn"
      imageHeight={20}
      flexType="flex-col"
   />

   <ArrowsDescription
      leftREM={86}
      topREM={166}
      description="Hackathon"
      image="hackathon"
      imageHeight={28}
      flexType="flex-col-reverse"
/>
   <img class="absolute z-50 h-40 left-0 top-[173rem]" src="../src/lib/components/img/queen.png" alt="arrow">
   <div class="w-full flex flex-row justify-center items-center gap-16">
      <ProjectCard
      image="boatParking"
      title="Boat Haven"
      />
      <ProjectCard
         cardOrder = {true}
         image="curiousVillage"
         title="Curious Village"
         />
         <ProjectCard
         image="looney"
         title="Looney"
         />
         <ProjectCard
         cardOrder = {true}
         image="screensaver"
         title="''Screensaver''"
      />
   </div>
</div>