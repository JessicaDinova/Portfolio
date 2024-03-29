<script>
    import Home from "../lib/components/Home.svelte";
    import AboutMe from "$lib/components/AboutMe.svelte";
    import Skills from "$lib/components/Skills.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import BoatHaven from "$lib/components/BoatHaven.svelte";
    import CuriousVillage from "$lib/components/CuriousVillage.svelte";
    import Looney from "$lib/components/Looney.svelte";
    import Screensaver from "$lib/components/Screensaver.svelte";

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute("href"));
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
        });
    }

    let y;
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


<nav class="w-full flex flex-row gap-56 items-center justify-center text-center fixed z-[90] text-[1.8rem] py-5 font-light bg-cream-100 {((y > 2108 && y < 3590 )|| y > 5050 ) ? 'colorOut text-white' : 'colorIn text-black'}">
    <a href="#home" on:click|preventDefault={scrollIntoView} class="{y < 700 ? 'highlight' : ''}">Home</a>
    <a href="#aboutMe" on:click|preventDefault={scrollIntoView} class="{(y > 699 && y < 1404) ? 'highlight' : ''}">About Me</a>
    <a href="#skills" on:click|preventDefault={scrollIntoView} class="{(y > 1403 && y < 2124) ? 'highlight' : ''}">My Skills</a>
    <a href="#projects" on:click|preventDefault={scrollIntoView} class="{(y < 2123) ? '' : ((y > 2108 && y < 3590 )|| y > 5050 ) ? 'highlightDark' : 'highlight'}">Projects</a>
</nav>

<div class="snap-y snap-mandatory overflow-y-auto h-full">
    <div class="snap-center h-auto" id="home">
        <Home />
    </div>
    <div class="snap-center h-auto" id="aboutMe">
        <AboutMe />
    </div>
    <div class="snap-center h-auto" id="skills">
        <Skills />
    </div>
    <div class="snap-center h-auto" id="projects">
        <Projects />
    </div>
    <div class="snap-center h-auto" id="boatHaven">
        <BoatHaven />
    </div>
    <div class="snap-center h-auto" id="curiousVillage">
        <CuriousVillage />
    </div>
    <div class="snap-center h-auto" id="looney">
        <Looney />
    </div>
    <div class="snap-center h-auto" id="screensaver">
        <Screensaver />
    </div>
</div>
<svelte:window bind:scrollY={y}/>
