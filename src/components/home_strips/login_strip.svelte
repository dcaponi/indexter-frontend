<script lang="ts">
    import { onMount } from "svelte";
    import { loggedIn } from "../../store";

    export let httpClient;
    let emailSent = false;
    let authed = false;
    let email = "";
    let focus = null;

    loggedIn.subscribe(loggedIn => authed = loggedIn);
    const auth = async (e: Event) => {
        e.preventDefault();
        let resp = await httpClient.post("login", { email });
        emailSent = !emailSent
    }

    onMount(() => {
        if (window.location.hash == "#login" && focus) {
            focus.focus()            
        }
    })
</script>

<div class="login" id="login">
    {#if !authed}
    <h2 class="strip-title">Try The Beta</h2>
        <form on:submit={auth}>
            <input bind:this={focus} type="email" id="email" name="email" placeholder="email address" bind:value={email} />&nbsp; 
            <button type="submit">Let's Go!</button>
        </form>
    {/if}
    {#if emailSent}
        <p>Email Sent to {email}! Check your <a href={"https://"+email.split("@")[1]}>inbox</a> for your login link</p>
    {/if}
</div>

<style lang="scss">
    @import "../../global-styles/colors.scss";
    .login {
        padding: 0px 15px;
        text-align: center;
    }
    .strip-title {
        margin-top: 50px;
    }
</style>