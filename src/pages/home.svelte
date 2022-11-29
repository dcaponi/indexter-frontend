<script lang="ts">
    import axios from 'axios';
    import JumbotronCard from '../components/home_strips/jumbotron.svelte';
    import LoginStrip from '../components/home_strips/login_strip.svelte';
    import PlansStrip from '../components/home_strips/plans_strip.svelte';
    import UseCasesStrip from '../components/home_strips/use_cases_strip.svelte';
    
    let httpClient = axios.create({
        baseURL: import.meta.env.VITE_AUTH_SERVICE_URL, 
        proxy: false,
        withCredentials: true,
    });
</script>

<main>
    <JumbotronCard />
    <LoginStrip httpClient={httpClient} />
    <UseCasesStrip />
    <PlansStrip />
    <LoginStrip httpClient={httpClient} />
</main>

<style lang="scss">
    main {
        margin-top: 100px;
    }
</style>