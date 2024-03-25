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
</script>

<nav class="w-full flex flex-row gap-72 items-center justify-center text-center fixed z-[90] text-3xl py-5 font-light bg-cream-100">
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
    <Skills />
</section>
<section id="projects">
    <Projects/>
</section>
<section id="boatHaven">
    <BoatHaven />
</section>
<section id="curiousVillage">
    <CuriousVillage />
</section>
<section id="looney">
    <Looney />
</section>
<section id="screensaver">
    <Screensaver />
</section>
