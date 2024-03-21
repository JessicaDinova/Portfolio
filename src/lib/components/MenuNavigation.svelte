<script>
    function scrollIntoView({ target }) {
        const element = document.querySelector(target.getAttribute('href'));
        if (!element) return;
        element.scrollIntoView({
            behaviour: 'smooth'
        });
    }
</script>

<nav class="w-full flex flex-row gap-5 items-center fixed z-30">
    <a href="#home" on:click|preventDefault={scrollIntoView}>Home</a>
    <a href="#aboutMe" on:click|preventDefault={scrollIntoView}>About Me</a>
    <a href="#skills" on:click|preventDefault={scrollIntoView}>Skills</a>
    <a href="#projects" on:click|preventDefault={scrollIntoView}>Projects</a>
</nav>