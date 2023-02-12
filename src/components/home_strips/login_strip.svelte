<script lang="ts">
    import { Tooltip } from '@svelteuidev/core';
    import { loggedIn } from "../../store";
    
    export let httpClient;
    let emailSent = false;
    let authed = false;
    let email = "";

    loggedIn.subscribe(loggedIn => authed = loggedIn);
    const auth = async (e: Event) => {
        e.preventDefault();
        await httpClient.post("login", { email });
        emailSent = !emailSent
    }
</script>

<div class="login" id="login">
    {#if !authed}
    <Tooltip position="right" placement="end" label="We use a minimal passwordless flow for both sign up and log in">
        <h2 class="strip-title">Log In or Sign Up</h2>
    </Tooltip>
        <form on:submit={auth}>
            <input type="email" id="email" name="email" placeholder="email address" bind:value={email} />&nbsp; 
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