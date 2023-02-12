<script lang="ts">
    import { loggedIn } from "../store";
    let authed = false;
    loggedIn.subscribe(loggedIn => authed = loggedIn);

</script>

<nav>
    <h2><a href="/">Indexter</a></h2>
    {#if authed}
     <!-- svelte-ignore a11y-click-events-have-key-events -->
     <p class="right"><a href="/links">Account Linking</a></p>
     <!-- svelte-ignore a11y-click-events-have-key-events -->
     <p class="right"><a href="/search">Search</a></p>
    {:else}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p class="right"><a href="#login">Login / Signup</a></p>
    {/if}
    <!-- <p class="left"><a href="/about">About</a></p> -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p class="left"><a href="#use-cases">Use Cases</a></p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p class="left"><a href="#plans">Plans</a></p>
</nav>

<style lang="scss">
    @import "../global-styles/colors.scss";

    nav {
        a {color: $white-smoke;}
        a:hover {color: $orange;}
        p:hover {color: $orange;}
        h2:hover {color: $orange;}
        overflow: hidden;
        padding: 0px 15px;
        background-color: $mid-blue;
        position: fixed;
        width: 100%;
        top: 0;
    }
    p {
        font-size: 24px;
        font-weight: 400;
        cursor: pointer;
    }
    h2 {
        margin: auto;
        float: left;
        margin-right: 25px;
        line-height: 2.5em;
    }
    .left {
        float: left;
        line-height: 1.75em;
        display: block;
        margin-right: 20px;
    }

    .right {
        float: right;
        line-height: 1.75em;
        display: block;
        margin-left: 10px;
        margin-right: 30px;;
    }
</style>