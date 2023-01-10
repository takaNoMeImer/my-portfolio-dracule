<script>
    let loading = "";

    const showSpinner = () => {
        loading = 'is-loading'
        setTimeout(() => {
            loading = '';
        }, 1000);
    };
</script>

<section id="contact" class="contact">
    <div class="form-contact">
        <div class="form-body">
            <p class="form-title has-text-info">Contacto</p>
            <div class="field">
                <div class="control">
                    <input class="input" type="text" placeholder="Nombre" />
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <input class="input " type="email" placeholder="Email" />
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <textarea class="textarea" placeholder="Mensaje" />
                </div>
            </div>

            <button on:click={showSpinner} class={`button is-link ${loading}`}>
                Enviar
            </button>
        </div>
    </div>
</section>

<style>
    .contact {
        width: 80%;
        margin: 0 auto;
    }
    .form-contact {
        width: 80%;
        margin: 0 auto;
    }
    .form-body {
        padding: 10px;
        margin: 0 auto;
        width: 60%;
    }
    .form-body > p {
        text-align: center;
    }
    .form-title {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    .field {
        margin-bottom: 2rem;
    }
    button {
        width: 100%;
    }

    @media (max-width: 900px) {
        .contact, .form-contact {
            width: 90%;
        }
        .form-body {
            width: 70%;
        }
    }
    @media (max-width: 768px) {
        .contact, .form-contact {
            width: 100%;
        }
        .form-body {
            width: 90%;
        }
    }
</style>
