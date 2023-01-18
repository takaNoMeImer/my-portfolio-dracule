                <!-- svelte-ignore security-anchor-rel-noreferrer -->
<div id="home" class="home">
    <div class="home__left">
        <div class="left-card">
            <div class="card-img">
                <img src="/programmer.png" alt="Imagen #1" width="260px" />
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
                <a href="https://github.com/takaNoMeImer" target="_blank">
                    <box-icon
                    type="logo"
                    name="github"
                    size="50px"
                    color="rgb(71, 27, 231)"
                />
                </a>
                <a href="https://www.linkedin.com/in/imer-gonzalez-21ab66239/" target="_blank">
                    <box-icon
                    name="linkedin-square"
                    type="logo"
                    size="50px"
                    color="rgb(71, 27, 231)"
                />
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    .home {
        width: 80%;
        margin: 4rem auto;
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
            flex-direction: column;
            align-items: center;
            row-gap: 2rem;
        }   
        .home__left, .home__right {
            width: 100%;
        }   
        .home__right {
            width: 100%;
            text-align: center;
        }

        .left-card .card-img {
            height: 300px;
        }
        .right-card .card-text {
            font-size: 2rem;
        }
        .right-card .card-icons {
            justify-content: center;
            margin-top: 2rem;
        }
    }

</style>
