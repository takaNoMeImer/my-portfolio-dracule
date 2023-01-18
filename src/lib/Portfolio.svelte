<script>
    import { datos } from "../store";
    import Card from "./Card.svelte";
</script>

<section id="portfolio" class="portfolio">
    <p class="portfolio-title has-text-info">Proyectos</p>
    <div class="portfolio-body">
        {#each $datos as d}
            <Card item={d}/>
        {/each}
    </div>
</section>

<style>
    .portfolio {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 4rem;
    }
    .portfolio-title {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    .portfolio-body {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 800px) {
        .portfolio {
            width: 88%;
        }
        .portfolio-body {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 500px) {
        .portfolio {
            width: 90%;
        }
        .portfolio-body {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
