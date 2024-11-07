// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página principal de Feal Motor Corp. cargada correctamente.");

    // Efecto al hacer hover sobre los modelos
    const modelImages = document.querySelectorAll('.model img');

    modelImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';  // Agranda la imagen
            image.style.filter = 'brightness(1.2)';  // Aumenta el brillo
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';  // Vuelve al tamaño original
            image.style.filter = 'brightness(1)';  // Vuelve al brillo original
        });
    });

    // Opcional: Podrías agregar más interacciones si fuera necesario
});