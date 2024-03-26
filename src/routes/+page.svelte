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


<nav class="w-full flex flex-row gap-72 items-center justify-center text-center fixed z-[90] text-3xl py-5 font-light bg-cream-100 {((y > 2108 && y < 3590 )|| y > 5050 ) ? 'colorOut text-white' : 'colorIn text-black'}">
    <a href="#home" on:click|preventDefault={scrollIntoView}>Home</a>
    <a href="#aboutMe" on:click|preventDefault={scrollIntoView}>About Me</a>
    <a href="#skills" on:click|preventDefault={scrollIntoView}>My Skills</a>
    <a href="#projects" on:click|preventDefault={scrollIntoView}>Projects</a>
</nav>

    <section id="home">
        <Home />
    </section>
    <section id="aboutMe">
        <AboutMe />
    </section>
    <section id="skills">
        <Skills y={y}/>
    </section>
    <section id="projects">
        <Projects y={y}/>
    </section>
    <section id="boatHaven">
        <BoatHaven y={y}/>
    </section>
    <section id="curiousVillage">
        <CuriousVillage y={y}/>
    </section>
    <section id="looney">
        <Looney y={y}/>
    </section>
    <section id="screensaver">
        <Screensaver y={y}/>
    </section>

<svelte:window bind:scrollY={y}/>
<!-- <svelte:window on:scroll={console.log(y)} bind:scrollY={y}/> -->
