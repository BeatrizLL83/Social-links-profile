document.querySelectorAll(".social-btn"); // "Tráeme todos los botones sociales"

const botones = document.querySelectorAll(".social-btn");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        // Esto solo si quieres que pase algo ANTES de ir al link
        console.log("Navegando a: " + boton.textContent);
    });
});
