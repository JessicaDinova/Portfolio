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

<div class="snap-y snap-mandatory overflow-y-auto">
    <section class="snap-start" id="home">
        <Home />
    </section>
    <section class="snap-start" id="aboutMe">
        <AboutMe />
    </section>
    <section class="snap-start" id="skills">
        <Skills y={y}/>
    </section>
    <section class="snap-start" id="projects">
        <Projects y={y}/>
    </section>
    <section class="snap-start" id="boatHaven">
        <BoatHaven y={y}/>
    </section>
    <section class="snap-start" id="curiousVillage">
        <CuriousVillage y={y}/>
    </section>
    <section class="snap-start" id="looney">
        <Looney y={y}/>
    </section>
    <section class="snap-start" id="screensaver">
        <Screensaver y={y}/>
    </section>
</div>
<svelte:window bind:scrollY={y}/>
