<script>
    import Skill from "./Skill.svelte";

    export let item;
</script>
                <!-- svelte-ignore security-anchor-rel-noreferrer -->
<div class="card">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <div class="card-image">
        <figure class="image is-4by3">
            <img src={`${item.poster}.PNG`} alt={item.name} />
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img src="/Perfil1.jpg" alt="Placeholder image" />
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">{item.name}</p>
                <p class="subtitle is-6">{item.autor}</p>
            </div>
        </div>

        <div class="content">
            <div class="content__skills">
                {#each item.skill as skill}
                    <Skill name={skill} />
                {/each}
            </div>
            <br />
            <div class="actions">
                <a
                    href={item.link}
                    target="_blank"
                    class="button is-link is-light"
                >
                    <box-icon name="show-alt" size="25px"/>
                    Demo
                </a>
                <a
                    href={item.repo}
                    target="_blank"
                    class="button is-link is-light"
                >
                    <box-icon type="logo" size="25px" name="github" />
                    Codigo
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    .content__skills {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    .actions {
        display: flex;
        justify-content: space-between;
    }
    .actions > * {
        display: flex;
        justify-content: space-evenly;
        width: 45%;
    }
</style>
