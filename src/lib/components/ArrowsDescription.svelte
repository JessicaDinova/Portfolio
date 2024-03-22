<script>
    export let leftREM = 63;
    export let topREM = 0;
    export let description = "";
    export let image = "";
    export let imageHeight = 0;
    export let imageWidth = "";
    export let flexType = "flex-row"
</script>

<div class="absolute z-50 left-[{leftREM}rem] top-[{topREM}rem] flex {flexType} justify-center items-center gap-2">
    <p class="text-2xl">{description}</p>
    <img 
    src="../src/lib/components/img/arrows/{image}.png"    
    alt="arrow"
    class="h-{imageHeight} {imageWidth}"
    >
</div>