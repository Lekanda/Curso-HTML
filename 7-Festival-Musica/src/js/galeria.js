document.addEventListener('DOMContentLoaded', function () {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i =1; i<= 12; i++){

        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        // atributo personalizado(data-imagen-id)
        imagen.dataset.imagenId = i;
        // console.log(imagen);

        // Añadir la funcion de mostrarImagen()
        imagen.onclick = mostrarImagen;


        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);

    }
}

function mostrarImagen(e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.dataset);
    // console.log(e.target.dataset.imagenId);
    // console.log(typeof e.target.dataset.imagenId); // String
    
    const id = parseInt(e.target.dataset.imagenId);
    
    // console.log(id);
    // console.log(typeof id);


    // Genera la imagen
    const imagen = document.createElement('IMG');
    // Ubicacion de imagen
    imagen.src = `build/img/grande/${id}.webp`;
    // console.log(imagen);

    // Efecto de imagen grande
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');


    // cuando se hace click fuera de la imagen se cierra
    overlay.onclick = function () {
        overlay.remove();
    }

    // Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');
    // Cuando se presiona se cierra la imagen
    cerrarImagen.onclick = function () {
        overlay.remove();
    }




    overlay.appendChild(cerrarImagen)



    // Mostrar en el HTMl
    const  body = document.querySelector('body');
    body.appendChild(overlay)
    body.classList.add('fijar-body');

}



