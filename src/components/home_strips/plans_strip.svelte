<script lang="ts">
    import BasicCard from "../cards/basic_card.svelte";
    import { loggedIn } from "../../store";

    let authed;

    loggedIn.subscribe(loggedIn => authed = loggedIn);

</script>

<h2 class="strip-title">Plans</h2>
<div class="three-card-strip" id="plans">

    <a href="#/plans" class="clickable-card">
            <BasicCard oneOf=3>
                <h3 slot="card-title">Individual - Beta</h3>
                <i slot="card-icon" class="card-icon fa-solid fa-user"></i>
                <p slot="card-text">Single user or just trying out Indexter? Start here.</p>
            </BasicCard>
    </a>

    <a href="#/plans" class="clickable-card">
        <BasicCard oneOf=3>
            <h3 slot="card-title">Startup - Coming Soon</h3>
            <i slot="card-icon" class="card-icon fa-solid fa-users"></i>
            <p slot="card-text">For groups with a shared knowledge base</p>
        </BasicCard>
    </a>

    <a href="#/plans" class="clickable-card">
        <BasicCard oneOf=3>
            <h3 slot="card-title">Enterprise - Lets Chat</h3>
            <i slot="card-icon" class="card-icon fa-solid fa-city"></i>
            <p slot="card-text">For the mature complex powerhouses. Let's talk!</p>
        </BasicCard>
    </a>
</div>

<style lang="scss">
    @import "../../global-styles/colors.scss";
    h2 {
        padding: 0px 15px;
    }
    p {
        margin: auto;
        overflow: wrap;
    }
    .strip-title {
        margin-top: 50px;
        text-align: center;
    }
    .clickable-card {
        text-decoration: none;
        color: $white-smoke;
        transition: color 300ms;
        i {transition: color 300ms;}
    }
    .clickable-card:hover {
        color: $orange;
        i {color: $orange;}
    }
</style>