import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index.js";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="home" class="h-screen w-full bg-cream-100 flex justify-center items-center"><div class="flex flex-col"><h1 class="text-left text-7xl">Hello, I am Jessica</h1>
        <p class="text-right text-4xl">Wannabe graphic designer and web<br>developer</p></div></div>`;
});
const MenuNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="w-full flex flex-row gap-72 items-center justify-center text-center fixed z-30 text-2xl mt-10"><a href="#home">Home</a>
    <a href="#aboutMe">About Me</a>
    <a href="#skills">My Skills</a>
    <a href="#projects">Projects</a></nav>`;
});
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="aboutMe" class="h-screen w-full bg-cream-100 flex flex-row gap-44 justify-center items-center"><div class="w-[25rem]">hoi
    </div>
    <div class="text-right w-[35rem]"><p class="text-2xl">I am a 20 year old ICT student in the<br>Netherlands,<br>
            trying to achieve my dream of designing<br>and creating
            beautiful websites for people<br>all around the world.<br>
            I enjoy working in a team with hard-working<br>people in
            agile way.<br>My interests root in videogames, volleyball,<br>
            diamond paintings and book reading.
        </p></div></div>`;
});
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="skills" class="h-screen w-full bg-cream-100 flex items-center justify-center"><div class="flex items-center justify-center"><h1 class="text-2xl">I am regularly developing my skills</h1></div></div>`;
});
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardOrder = false } = $$props;
  let { image } = $$props;
  let { title } = $$props;
  if ($$props.cardOrder === void 0 && $$bindings.cardOrder && cardOrder !== void 0)
    $$bindings.cardOrder(cardOrder);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"w-64 h-[17rem] bg-cream-100 flex " + escape(cardOrder ? "flex-col-reverse" : "flex-col", true) + " gap-5 px-4 py-2 rounded-lg items-center justify-center mt-7"}"><div class="text-center"><h1 class="text-3xl">${escape(title)}</h1></div>
    <div><img src="${"../src/lib/components/img/projectsCards/" + escape(image, true) + ".png"}" alt="project" class="rounded-lg"></div></div>`;
});
const ArrowsDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { leftREM = 63 } = $$props;
  let { topREM = 0 } = $$props;
  let { description = "" } = $$props;
  let { image = "" } = $$props;
  let { imageHeight = 0 } = $$props;
  let { imageWidth = "" } = $$props;
  let { flexType = "flex-row" } = $$props;
  if ($$props.leftREM === void 0 && $$bindings.leftREM && leftREM !== void 0)
    $$bindings.leftREM(leftREM);
  if ($$props.topREM === void 0 && $$bindings.topREM && topREM !== void 0)
    $$bindings.topREM(topREM);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.imageHeight === void 0 && $$bindings.imageHeight && imageHeight !== void 0)
    $$bindings.imageHeight(imageHeight);
  if ($$props.imageWidth === void 0 && $$bindings.imageWidth && imageWidth !== void 0)
    $$bindings.imageWidth(imageWidth);
  if ($$props.flexType === void 0 && $$bindings.flexType && flexType !== void 0)
    $$bindings.flexType(flexType);
  return `<div class="${"absolute z-50 left-[" + escape(leftREM, true) + "rem] top-[" + escape(topREM, true) + "rem] flex " + escape(flexType, true) + " justify-center items-center gap-2"}"><p class="text-2xl">${escape(description)}</p>
    <img src="${"../src/lib/components/img/arrows/" + escape(image, true) + ".png"}" alt="arrow" class="${"h-" + escape(imageHeight, true) + " " + escape(imageWidth, true)}"></div>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="projects" class="h-screen w-full bg-screen-100 flex justify-center items-center">${validate_component(ArrowsDescription, "ArrowsDescription").$$render(
    $$result,
    {
      leftREM: 15,
      topREM: 147,
      description: "First gig",
      image: "firstGig",
      imageHeight: 16
    },
    {},
    {}
  )}

   ${validate_component(ArrowsDescription, "ArrowsDescription").$$render(
    $$result,
    {
      leftREM: 36,
      topREM: 170,
      description: "First game",
      image: "firstGame",
      imageHeight: 16,
      flexType: "flex-row-reverse"
    },
    {},
    {}
  )}

   ${validate_component(ArrowsDescription, "ArrowsDescription").$$render(
    $$result,
    {
      topREM: 149,
      description: "Hand drawn",
      image: "handDrawn",
      imageHeight: 20,
      flexType: "flex-col"
    },
    {},
    {}
  )}

   ${validate_component(ArrowsDescription, "ArrowsDescription").$$render(
    $$result,
    {
      leftREM: 86,
      topREM: 166,
      description: "Hackathon",
      image: "hackathon",
      imageHeight: 28,
      flexType: "flex-col-reverse"
    },
    {},
    {}
  )}
   <img class="absolute z-50 h-40 left-0 top-[173rem]" src="../src/lib/components/img/queen.png" alt="arrow">
   <div class="w-full flex flex-row justify-center items-center gap-16">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      image: "boatParking",
      title: "Boat Haven"
    },
    {},
    {}
  )}
      ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      cardOrder: true,
      image: "curiousVillage",
      title: "Curious Village"
    },
    {},
    {}
  )}
         ${validate_component(ProjectCard, "ProjectCard").$$render($$result, { image: "looney", title: "Looney" }, {}, {})}
         ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      cardOrder: true,
      image: "screensaver",
      title: "''Screensaver''"
    },
    {},
    {}
  )}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MenuNavigation, "MenuNavigation").$$render($$result, {}, {}, {})}
${validate_component(Home, "Home").$$render($$result, {}, {}, {})}
${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}
${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}
${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
