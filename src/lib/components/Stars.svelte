<script>
    export let leftOfset = ""
    export let topOfset = ""
    export let starNumber = ""
    export let starHeight = ""
</script>

<div class="absolute z-20 {leftOfset} {topOfset}">
    <img class="{starHeight}" src="../src/lib/components/img/star{starNumber}.png" alt="star">
</div>