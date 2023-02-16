<script lang="ts">
    import axios from 'axios';
    import { Loader } from '@svelteuidev/core'
    import { linkableAccounts, loggedIn } from "../store";
	import About from './about.svelte';
	import App from '../App.svelte';

    let google, atlassian, slack;

    let loadingGoogle, loadingAtlassian = true;

    let httpClient = axios.create({
        baseURL: import.meta.env.VITE_AUTH_SERVICE_URL, 
        proxy: false,
        withCredentials: true,
    });

    (async () => {
        loggedIn.subscribe(async loggedIn => {
            if (loggedIn) {
                let resp = await httpClient.get("/connections/links");
                linkableAccounts.set(resp.data.message);
            }
        })
    })();

    linkableAccounts.subscribe(linkableAccounts => {
        google = linkableAccounts.google;
        atlassian = linkableAccounts.atlassian;
        slack = linkableAccounts.slack;
    })

    const indexGoogleDocs = async () => {
        loadingGoogle = true;
        await httpClient.get('/index/googledocs');
        loadingGoogle = false;
    }

    const dropDocs = async (source: string) => {
        await httpClient.delete(`/docs?source=${source}`)
    }

    const indexAtlassianDocs = async () => {
        let res = await httpClient.get('/index/atlassiandocs');
    }

</script>
<main>
    <div class="link-section">
        {#if google.linked}
        <span>Google Docs</span>
        <button on:click={indexGoogleDocs}>Index Docs</button>
        <button on:click={() => dropDocs('docs.google.com')}>Drop Google Docs</button>
        {#if loadingGoogle}
            <span class="loader"><Loader size={50} color="orange" variant="bars"/></span> Please Wait...
        {/if}
        {:else}
        <a href={google.linkURL}>connect google</a>
        {/if}
    </div>

    <div class="link-section">
        {#if atlassian.linked}
        <span>Atlassian Confluence</span><button on:click={indexAtlassianDocs}>Index Docs</button>
        <button on:click={() => dropDocs('atlassian.net')}>Drop Atlassian Confluence</button>
        {#if loadingAtlassian}
            <span class="loader"><Loader size={50} color="orange" variant="bars"/></span> Please Wait...
        {/if}
        {:else}
        <a href={atlassian.linkURL}>connect atlassian (confluence)</a>
        {/if}
    </div>

    <div class="link-section">
        {#if slack.linked}
        <p>Slack Linked</p>
        {:else}
        <a href="{slack.linkURL}">
            <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
        </a>
        {/if}
    </div>
</main>

<style lang="scss">
    main {
        margin-top: 100px;
    }

    .loader {
        vertical-align: middle;
    }
    
    .link-section {
        padding: 15px;
        button {
            margin-right: 10px;
        }
        span {
            margin-right: 10px;
        }
    }

</style>