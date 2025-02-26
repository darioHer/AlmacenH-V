document.addEventListener("DOMContentLoaded", () => {
    // 🌙 Modo oscuro/claro
    const btnModoOscuro = document.createElement("button");
    btnModoOscuro.textContent = "🌙 Modo Oscuro";
    btnModoOscuro.classList.add("modo-oscuro-btn");
    document.body.appendChild(btnModoOscuro);

    btnModoOscuro.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");
        if (document.body.classList.contains("modo-oscuro")) {
            btnModoOscuro.textContent = "☀️ Modo Claro";
            localStorage.setItem("modo", "oscuro");
        } else {
            btnModoOscuro.textContent = "🌙 Modo Oscuro";
            localStorage.setItem("modo", "claro");
        }
    });

    // Guardar la preferencia del usuario
    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("modo-oscuro");
        btnModoOscuro.textContent = "☀️ Modo Claro";
    }

    // 📌 Menú Responsive
    const nav = document.querySelector("nav ul");
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "☰ Menú";
    menuBtn.classList.add("menu-btn");
    document.querySelector("nav").prepend(menuBtn);

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("mostrar-menu");
    });

    // 🔽 Desplazamiento suave en los enlaces de navegación
    document.querySelectorAll("nav a").forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            const seccion = document.querySelector(enlace.getAttribute("href"));
            seccion.scrollIntoView({ behavior: "smooth" });
        });
    });

    // 🎯 Resaltar sección activa mientras se hace scroll
    const secciones = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY + 100;
        secciones.forEach(sec => {
            if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
                document.querySelector("nav a.active")?.classList.remove("active");
                document.querySelector(`nav a[href="#${sec.id}"]`).classList.add("active");
            }
        });
    });
});
