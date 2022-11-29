<script lang="ts">
    import { Route } from 'svelte-routing';
    import { loggedIn } from "../store";

    import Home from "../pages/home.svelte"

    export let path: string;
    export let component: any;

    loggedIn.subscribe(async loggedIn => loggedIn)
    
</script>

{#if loggedIn}
    <Route path={path} component={component} />
{:else}
    <Route path={path} component={Home} />
{/if}