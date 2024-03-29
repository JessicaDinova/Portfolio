<script>
    export let leftOfset = ""
    export let topOfset = ""
    export let starNumber = ""
    export let starHeight = ""
</script>

<div class="absolute z-20 {leftOfset} {topOfset}">
    <img class="{starHeight}" src="stars/star{starNumber}.png" alt="star">
</div>