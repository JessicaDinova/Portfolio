<script>
    import Home from "../lib/components/Home.svelte";
    import AboutMe from "$lib/components/AboutMe.svelte";
    import Skills from "$lib/components/Skills.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import BoatHaven from "$lib/components/BoatHaven.svelte";
    import CuriousVillage from "$lib/components/CuriousVillage.svelte";
    import Looney from "$lib/components/Looney.svelte";
    import Screensaver from "$lib/components/Screensaver.svelte";
    import { onMount } from "svelte";

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute("href"));
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
        });
    }

    let y;
    let fullScreen;
    let screenElement;
    let projectHeight;
    let boatHeight;
    let villageHeight;
    let looneyHeight;
    let screenHeight;
    let aboutHeight;
    let skillsHeight;
    onMount(() => {
        fullScreen = document.body.scrollHeight;
        screenElement = document.getElementById("home").scrollHeight;
        projectHeight = fullScreen - (screenElement * 5);
        boatHeight = fullScreen - (screenElement * 4);
        villageHeight = fullScreen - (screenElement * 3);
        looneyHeight = fullScreen - (screenElement * 2);
        screenHeight = fullScreen - screenElement - document.getElementById("nav").scrollHeight;
        aboutHeight = fullScreen - (screenElement * 7);
        skillsHeight = fullScreen - (screenElement * 6);
	})    
</script>

<style>
    .colorIn {
       background-color: #F4F0ED;
       transition: background-color 380ms ease-in;
    }
    .colorOut {
       background-color: #313131;
       transition: background-color 380ms ease-in;
    }
 </style>

<nav id="nav" class="w-full lg:flex flex-row gap-56 items-center hidden justify-center text-center fixed z-[90] text-[1.8rem] py-5 font-light {((y >= projectHeight && y < villageHeight )|| y >= screenHeight ) ? 'colorOut text-white' : 'colorIn text-black'}">
    <a href="#home" on:click|preventDefault={scrollIntoView} class="{y < screenElement ? 'highlight' : ''}">Home</a>
    <a href="#aboutMe" on:click|preventDefault={scrollIntoView} class="{(y >= screenElement && y < skillsHeight) ? 'highlight' : ''}">About Me</a>
    <a href="#skills" on:click|preventDefault={scrollIntoView} class="{(y >= skillsHeight && y < projectHeight) ? 'highlight' : ''}">My Skills</a>
    <a href="#projects" on:click|preventDefault={scrollIntoView} class="{(y < projectHeight) ? '' : ((y >= projectHeight && y < villageHeight ) || y >= screenHeight ) ? 'highlightDark' : 'highlight'}">Projects</a>
</nav>

<div class="lg:overflow-y-auto overflow-hidden h-full flex-col items-center">
    <div class="h-screen" id="home">
        <Home />
    </div>
    <div class="h-screen" id="aboutMe">
        <AboutMe />
    </div>
    <div class="h-screen" id="skills">
        <Skills />
    </div>
    <div class="lg:h-screen h-[250vh]" id="projects">
        <Projects />
    </div>
    <div class="h-screen" id="boatHaven">
        <BoatHaven />
    </div>
    <div class="h-screen" id="curiousVillage">
        <CuriousVillage />
    </div>
    <div class="h-screen" id="looney">
        <Looney />
    </div>
    <div class="h-screen" id="screensaver">
        <Screensaver />
    </div>
</div>
<svelte:window bind:scrollY={y}/>
