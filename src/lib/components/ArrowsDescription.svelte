<script>
    export let leftREM = ""
    export let topREM = ""
    export let description = ""
    export let imageArrow = ""
    export let imageHeight = ""
    export let flexType = "flex-row"
</script>

<div class="absolute z-30 {leftREM} {topREM} flex {flexType} justify-center items-center gap-2">
    <p class="text-3xl text-lavander-100 font-drawn font-extrabold">{description}</p>
    <img 
    src="arrows/{imageArrow}.png"    
    alt="arrow"
    class="{imageHeight}"
    >
</div>