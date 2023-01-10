<section id="about" class="about">
    <div class="about-title">
        <p class="has-text-info">Sobre Mi</p>
    </div>

    <div class="about-body">
        <div class="body-left">
            <img src="/vite.svg" alt="">
        </div>
        <div class="body-right">
            <p class="p-title">Hola, soy Imer</p>
            <p class="p-message">Soy un Junior Frontend/Backend Developer, me puedo desarrollar en multiples tecnologias web tales como Frameworks SPA, Gestores SQL y NoSQL, distintos lenguajes de programacion como Go, Java, C#, Dart entre otros. Me considero una persona muy dedicada y perseverante.</p>
        </div>
    </div>
</section>

<style>
    .about {
        width: 80%;
        margin: 0 auto;
    }
    .about-title {
        text-align: center;
        font-size: 2.5rem;
    }
    .about-body {
        display: flex;
        justify-content: space-between;
    }
    .about-body > * {
        width: 50%;
    }
    .body-left, .body-right {
        display: grid;
        align-content: center;
        justify-content: center;
    }
    .body-left img {
        width: 400px;
    }
    .p-title {
        font-size: 24px;
        font-weight: bold;
        line-height: 3rem;
    }
    .p-message {
        font-size: 18px;
    }
</style>