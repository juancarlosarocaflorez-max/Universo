// =====================================
// NUESTRO PEQUEÑO UNIVERSO ❤️
// =====================================

// Fecha de inicio de nuestra relación
const fechaInicio = new Date(2026, 6, 19, 0, 0, 0);

// Abrir el regalo
function abrirRegalo() {
    document.getElementById("inicio").style.display = "none";

    const contenido = document.getElementById("contenido");
    contenido.classList.remove("oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    crearCorazones();

    // Intentar iniciar la música después del clic
    const musica = document.getElementById("musica");

    musica.play().then(() => {
        document.getElementById("botonMusica").textContent =
            "♫ Pausar música";
    }).catch(() => {
        document.getElementById("botonMusica").textContent =
            "♫ Reproducir música";
    });
}

// Control de música
function alternarMusica() {
    const musica = document.getElementById("musica");
    const boton = document.getElementById("botonMusica");

    if (musica.paused) {
        musica.play().then(() => {
            boton.textContent = "♫ Pausar música";
        }).catch(() => {
            boton.textContent = "♫ No se pudo reproducir";
        });
    } else {
        musica.pause();
        boton.textContent = "♫ Reproducir música";
    }
}

// Contador de tiempo juntos
function actualizarContador() {
    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    if (diferencia < 0) {
        document.getElementById("dias").textContent = "0";
        document.getElementById("horas").textContent = "0";
        document.getElementById("minutos").textContent = "0";
        document.getElementById("segundos").textContent = "0";
        return;
    }

    const segundosTotales = Math.floor(diferencia / 1000);

    const dias = Math.floor(segundosTotales / 86400);
    const horas = Math.floor((segundosTotales % 86400) / 3600);
    const minutos = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);

// Mensajes románticos
const mensajes = [
    "Eres mi casualidad favorita. ❤️",
    "Mi lugar favorito siempre será a tu lado. 💕",
    "No necesito un mundo perfecto, te necesito a ti. 🌷",
    "Tu sonrisa es mi parte favorita del día. 🥰",
    "Si volviera a elegir, volvería a elegirte a ti. ❤️",
    "Quiero muchos amaneceres y atardeceres contigo. 🌅",
    "Gracias por hacer mi vida más bonita. 💗",
    "Eres esa persona con la que quiero vivir mil aventuras. ✨",
    "Mi corazón siempre encuentra el camino hacia ti. 💞"
];

function nuevoMensaje() {
    const mensaje = document.getElementById("mensaje");

    let nuevo;

    do {
        nuevo = mensajes[Math.floor(Math.random() * mensajes.length)];
    } while (nuevo === mensaje.textContent);

    mensaje.style.opacity = "0";

    setTimeout(() => {
        mensaje.textContent = nuevo;
        mensaje.style.opacity = "1";
    }, 250);
}

// Corazones flotantes
function crearCorazones() {
    const contenedor = document.getElementById("corazones");

    setInterval(() => {
        const corazon = document.createElement("div");

        corazon.classList.add("corazon-flotante");

        const simbolos = ["❤️", "💕", "💗", "💖", "🌸"];
        corazon.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.fontSize = (15 + Math.random() * 20) + "px";

        contenedor.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 7000);

    }, 700);
}