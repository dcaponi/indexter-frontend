<script lang="ts">
    export let oneOf;
    let frac = oneOf ? 1/oneOf * 100 : 1/3 * 100;

</script>

<div class="basic-card" style="max-width: {frac}%;">
    <slot name="card-title">
        <h3>Unspeced Card Title</h3>
    </slot>
    
    <slot name="card-icon">
        <i class="card-icon fa-solid fa-wrench"></i>
    </slot>

    <slot name="card-text">
        <p>Unspeced card text lorem ipsum dolor sit amet ding dong fake text that looks cool for visual purposes or something</p>
    </slot>
</div>

<style lang="scss">
    .basic-card {
        text-align: center;
        flex-basis: content;
        min-width: 300px;
    }
    h3 {
        text-align: center;
    }

    p {
        margin: auto;
        overflow: wrap;
    }
</style>