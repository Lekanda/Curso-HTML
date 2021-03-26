document.addEventListener('DOMContentLoaded', function(){
    eventListeners();

    darkMode();

});







// Modo 1 (Curso)
// function darkMode() {
//     const botonDarkMode = document.querySelector('.dark-mode-boton');
//     botonDarkMode.addEventListener('click', function () {
//         document.body.classList.toggle('dark-mode');
//     })
// }


// Modo 2 (Guarda los cambios)
function darkMode() {

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    // console.log(prefiereDarkMode.matches);

    if(prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change', function() {
        if(prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    const botonDarkMode = document.querySelector('.dark-mode-boton');
    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
}



function eventListeners() {
    // alert('Prueba');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive(){
    // console.log('Desde navegacion responsive');

    const navegacion = document.querySelector('.navegacion');

    // Metodo 1
    // if(navegacion.classList.contains('mostrar')) {
    //     navegacion.classList.remove('mostrar');
    // } else {
    //     navegacion.classList.add('mostrar');
    // }
    
    // Metodo 2 (Toggle). Sí esta la quita , sí no esta la pone.
    navegacion.classList.toggle('mostrar');
    
}

