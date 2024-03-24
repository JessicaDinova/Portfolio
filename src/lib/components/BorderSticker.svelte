<script>
    export let leftOfset = "ml-0"
    export let topOfset = ""
    export let imageSticker = ""
    export let stickerHeight = ""
</script>

<div class="absolute z-40 {leftOfset} {topOfset} w-auto">
    <img 
    src="../src/lib/components/img/{imageSticker}.png"    
    alt="sticker"
    class="{stickerHeight} opacity-45"
    >
</div>