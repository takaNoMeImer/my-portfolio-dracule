<div id="home" class="home">
    <div class="home__left">
        <div class="left-card">
            <div class="card-img">
                <img src="/Perfil1.jpg" alt="Imagen #1" width="260px" />
            </div>
        </div>
    </div>
    <div class="home__right">
        <div class="right-card">
            <div class="card-text">
                <p>Hola,</p>
                Soy Imer. Desarrollador Web
            </div>

            <div class="card-icons">
                <box-icon
                    type="logo"
                    name="github"
                    size="50px"
                    color="rgb(71, 27, 231)"
                />
                <box-icon
                    name="linkedin-square"
                    type="logo"
                    size="50px"
                    color="rgb(71, 27, 231)"
                />
            </div>
        </div>
    </div>
</div>

<style>
    .home {
        width: 80%;
        margin: 0 auto;
        margin-top: 4rem;
        display: flex;
        justify-content: space-between;
        column-gap: 2rem;
    }

    .home__left {
        width: 50%;
    }

    .left-card .card-img {
        display: grid;
        align-content: center;
        justify-content: center;
        width: 100%;
        height: 500px;
        background-image: url("/graph.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .left-card .card-img img {
        border-radius: 50%;
    }

    .home__right {
        display: grid;
        align-content: center;
        width: 50%;
    }

    .right-card .card-text {
        font-size: 3rem;
        font-weight: bold;
    }
    .right-card .card-icons {
        display: flex;
        column-gap: 2rem;
        margin-top: 4rem;
    }

    @media (max-width: 768px) {
        
        .home {
            width: 90%;
        }

        .left-card .card-img {
            display: grid;
            align-content: center;
            justify-content: center;
            width: 100%;
            height: 500px;
            background-image: url("/graph.png");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
    }

</style>
