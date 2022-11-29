<script lang="ts">
    import searchDemo from "../../assets/indexter_demo.mp4"

</script>

<div class="jumbotron">
    <h2 class="strip-title">Supercharge your knowledge base</h2>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video src={searchDemo} type="video/mp4"/>
    <main>
        <p>
            Indexter unifies the search experience for your entire knowledge base where you spend most of your time. Let Indexter find and bring you the contextually relevant source material to help you make decisions faster and never lose valuable historical context to the documentation void.
        </p>
    </main>
</div>

<style lang="scss">
    @import "../../global-styles/colors.scss";
    .jumbotron {
        padding: 0px 15px;
    }
    main {
        margin: auto;
        max-width: 50%;
        text-align: center;
    }
    .strip-title {
        margin-top: 50px;
        text-align: center;
    }
    video {
        max-width: 800px;
        display: block;
        margin: auto;
    }
</style>