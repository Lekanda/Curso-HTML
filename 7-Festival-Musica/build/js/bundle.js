
document.addEventListener('DOMContentLoaded', function () {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i =1; i<= 12; i++){

        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;

        // console.log(imagen);

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);

    }
}