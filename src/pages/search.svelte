<script lang="ts">
    import axios from 'axios';
    let query;
    let results;

    let httpClient = axios.create({
        baseURL: import.meta.env.VITE_AUTH_SERVICE_URL, 
        proxy: false,
        withCredentials: true,
    });

    let search = async (e: Event) => {
        e.preventDefault();
        if(query) {
            let res = await httpClient.get("docs", {params:{text: query}});
            results = res.data.message
        }
    }
</script>
<main>
    {#if !results}
    <div class="center-search">
        <h2>Search</h2>
        <form on:submit={search}>
            <input type="text" id="query" name="query" bind:value={query} /> 
            <button type="submit">Search</button>
        </form>
    </div>
    {:else}
    <div class="results-search">
        <h2>Search</h2>
        <form on:submit={search}>
            <input type="text" id="query" name="query" bind:value={query} /> 
            <button type="submit">Search</button>
        </form>
    </div>
    <div class="results-list">
        {#each results as result}
            <a href={result.source}><p>{result.title}</p></a>
            <p>{result.content.split(".")[0]}</p>
        {/each}
    </div>
    {/if}
</main>
<style lang="scss">
    @import "../global-styles/colors.scss";
    main {
        margin-top: 100px;
        height: 100%;
        padding: 15px;
    }
    .center-search {
        h2 {
            text-align: center;
        }
        form {
            text-align: center;
            margin: auto;
        }
        input {
            display: block;
            width: 350px;
            margin: auto;
        }
        button {
            display: block;
            margin: auto;
            margin-top: 20px;
        }
    }
    .results-search {
        h2 {
            display: inline;
        }
    }
    a {
        color: $orange;
    }
    a:hover {
        color: $mid-slate-blue;
    }
    a:visited {
        color: $peach;
    }
</style>