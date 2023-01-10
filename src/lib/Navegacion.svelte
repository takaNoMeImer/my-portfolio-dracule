<!-- svelte-ignore a11y-missing-attribute -->
<script>
    let isMenu = "";
    let statusMenu = false;

    const showMenuResponsive = () => {
        statusMenu = !statusMenu;
        statusMenu ? (isMenu = "is-active") : (isMenu = "");
    };
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->

<section class="navegacion">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation"
    >
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img src="/Icon.png" alt="Icon">
                </a>
        
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <a
                    on:click={showMenuResponsive}
                    role="button"
                    class="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
        
            <div id="navbarBasicExample" class={`navbar-menu ${isMenu}`}>
                <div class="navbar-end">
                    <a href="#home" class="navbar-item"> 
                        <box-icon type='solid' name='home'></box-icon>
                        <span>Inicio</span>    
                    </a>
                    <a href="#about" class="navbar-item"> 
                        <box-icon type='solid' name='info-circle'></box-icon>
                        <span>Sobre mi</span> 
                    </a>
                    <a href="#portfolio" class="navbar-item"> 
                        <box-icon type='solid' name='book-content'></box-icon>
                        <span>Portafolio</span> 
                    </a>
                    <a href="#contact" class="navbar-item"> 
                        <box-icon name='contact' type='solid' ></box-icon>
                        <span>Contacto</span>
                    </a>
        
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link"> 
                            <box-icon name='network-chart'></box-icon>
                            <span>Redes</span> 
                        </a>
        
                        <div class="navbar-dropdown">
                            <a href="https://www.linkedin.com/in/imer-gonzalez-21ab66239/" target="__blank" class="navbar-item"> 
                                <box-icon type='logo' name='linkedin-square'></box-icon>
                                <span>Linkedin</span> 
                            </a>
                            <a href="https://github.com/takaNoMeImer" target="__blank" class="navbar-item"> 
                                <box-icon type='logo' name='github'></box-icon>
                                <span>Github</span> 
                            </a>
                            <a href="https://www.instagram.com/bartdimhz/" target="__blank" class="navbar-item"> 
                                <box-icon type='logo' name='instagram-alt'></box-icon>
                                <span>Instagram</span> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </nav>
</section>

<style>
    .navbar-item {
        display: flex;
        gap: 5px;
    }
    .navbar-item span {
        font-weight: 600;
        font-size: 14px;
    }
    .navbar {
        width: 90%;
        margin: 0 auto;
        border-bottom: 2px solid rgb(224, 224, 224);
    }
</style>
