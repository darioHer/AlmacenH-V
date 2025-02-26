document.addEventListener("DOMContentLoaded", function () {
    const btnModoOscuro = document.getElementById("modo-oscuro-btn");
    const btnMenu = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const body = document.body;
    const navLinks = document.querySelectorAll("nav a");

    // Verificar la preferencia de modo oscuro
    if (localStorage.getItem("modo-oscuro") === "activado") {
        activarModoOscuro();
    }

    btnModoOscuro.addEventListener("click", function () {
        if (body.classList.contains("modo-oscuro")) {
            desactivarModoOscuro();
        } else {
            activarModoOscuro();
        }
    });

    btnMenu.addEventListener("click", function () {
        menu.classList.toggle("mostrar-menu");
    });

    function activarModoOscuro() {
        body.classList.add("modo-oscuro");
        localStorage.setItem("modo-oscuro", "activado");
        btnModoOscuro.textContent = "☀️ Modo Claro";
        actualizarContrasteLinks(true);
    }

    function desactivarModoOscuro() {
        body.classList.remove("modo-oscuro");
        localStorage.setItem("modo-oscuro", "desactivado");
        btnModoOscuro.textContent = "🌙 Modo Oscuro";
        actualizarContrasteLinks(false);
    }

    function actualizarContrasteLinks(modoOscuroActivado) {
        navLinks.forEach(link => {
            link.style.color = modoOscuroActivado ? "#FFD700" : "";
        });
    }

    // Resaltar sección activa en el menú
    window.addEventListener("scroll", function () {
        let fromTop = window.scrollY + 100;

        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));

            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                navLinks.forEach(link => link.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
});
