<script lang="ts">
  import axios from 'axios';
  import { Router, Route } from 'svelte-routing';
  import { loggedIn, linkableAccounts } from './store';

  import Search from './pages/search.svelte'
  import Links from './pages/links.svelte'
  import Home from './pages/home.svelte'
  // import About from './pages/about.svelte'
  import Footer from './components/footer.svelte'
  import NavBar from './components/nav_bar.svelte';
  
  import ProtectedRoute from './components/protected_route.svelte';
	import { onMount } from 'svelte';

  let httpClient = axios.create({
      baseURL: import.meta.env.VITE_AUTH_SERVICE_URL,
      proxy: false,
      withCredentials: true,
  });

  (async () => {
      let status = await httpClient.get("/status")
      loggedIn.set(status.data.loggedIn);
  })();

  onMount(()=>scrollTo())

  const scrollTo = () => {
    let hash = window.location.hash;
    let target = document.getElementById(hash.substring(1));
    if(target){
      var targetPosition = target.getBoundingClientRect().top;
      var offsetPosition = targetPosition - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }
</script>

<svelte:window on:hashchange={scrollTo}/>
<div>
  <NavBar/>
  <Router>
      <Route path="/" component={Home} />
      <!-- <Route path="/about" component={About} /> -->
      <ProtectedRoute path="/links" component={Links} />
      <ProtectedRoute path="/search" component={Search} />
  </Router>
  <Footer/>
</div>

<style lang="scss">
  div {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }
</style>