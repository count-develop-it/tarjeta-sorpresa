function verificarPassword() {
    const inputVal = document.getElementById('password').value.trim().toUpperCase();
    
    if (inputVal === "MAGICO") {
        const tarjeta = document.querySelector('.scrapbook-card');
        const musica = document.getElementById('musicaFondo');
        const loginSection = document.getElementById('login-section');
        const cartaSection = document.getElementById('carta-section');
        
        // 1. Configurar volumen al 100% y reproducir
        musica.volume = 1.0;
        musica.play().catch(error => {
            console.log("Error al reproducir audio:", error);
        });
        
        // 2. Aplicar desvanecimiento suave (fade-out)
        tarjeta.classList.add('fade-out');
        
        // 3. Cambiar de sección y volver a mostrar la tarjeta con la carta
        setTimeout(function() {
            loginSection.classList.add('hidden');
            cartaSection.classList.remove('hidden');
            
            // ¡ESTO ES LO QUE FALTABA! Volvemos a poner la opacidad en 1
            tarjeta.classList.remove('fade-out');
        }, 600);

    } else {
        document.getElementById('error-msg').innerText = "Mmm... esa no es la palabra. ¡Revisa bien tus iniciales! 🤭";
    }
}