<script lang="ts">
    import mainDiagram from "https://api.indexter.tech/main-diagram.png"
    import slackExample from "https://api.indexter.tech/slack-example.png"
    import machineLearning from "https://api.indexter.tech/machine-learning.jpg"
</script>

<div class="use-cases" id="use-cases">
    <div class="split-row">
        <div class=split-row-half>
            <img src={mainDiagram} alt="diagram showing the main idea of cross repository indexing and searching from your favorite app"/>
        </div>
        <div class=split-row-half>
            <h3>Every knowledge base platform has its ups and downs - but at the end of the day you just need the knowledge</h3>
            <ul>
                <li>Did your team have a brainstorming session in a Google Doc but took meeting notes in Confluence?</li>
                <li>Where exactly did that documentation live?</li> 
                <li>How do you know if there's existing docs on a new feature?</li>
            </ul>
            <p>With Indexter, it doesn't matter where you put your documentation - whenever you need to know something, Indexter has your back.</p>
        </div>
        
    </div>

    <div class="split-row">
        <div class=split-row-half>
            <h3>Spend less time (and tabs) tracking down documentation and more time doing what you love</h3>
            <p>Indexter meets you where you are and fits right into the conversation as a member of your team, a function you invoke, or (coming soon) as a smart assistant who pulls up potentially relevant docs based on what you're currently writing about</p>
        </div>
        <div class=split-row-half>
            <img src={slackExample} alt="talk directly to Indexter and have Indexter become your newest subject matter expert"/>
        </div>
    </div>

    <div class="split-row">
        <div class=split-row-half>
            <img src={machineLearning} alt="By Stephen Dawson at https://unsplash.com/@dawson2406"/>
        </div>
        <div class=split-row-half>
            <h3>(Coming Soon) Unleash the power of Artificial Intelligence on your knowledge base</h3>
            <p>Indexter plans to keep tabs on what your team cares about and how helpful existing documentation is so you can ensure you keep only your most useful documentation around and ensure your docs are always up to date</p>
        </div>
    </div>
</div>

<style lang="scss">
    img {
        width: 100%;
        max-height: 300px;
    }

    .use-cases {
        padding: 0px 15px;
        max-width: 75%;
        margin: auto;
    }

    .split-row {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        margin: 50px 0px;
    }

    .split-row-half {
        margin: auto;
        max-width: 45%;
    }

</style>