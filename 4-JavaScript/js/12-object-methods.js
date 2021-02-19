/**
- Un objeto LET o CONST se pueden modificar.

- USE STRICT => Hace que sea estricto a la hora de comprobar. En este caso queremos añadir una propiedad nueva(imagen) al objeto, pero, hemos congelado para que no se pueda, por eso dara error.

- 
*/
// "use strict"; // Correr JS en modo estricto.
const producto = {
    nombreProducto: 'Monitor 20 Pulgadas',
    precio:300,
    disponible:true
}

// De esta forma no deja añadir mas valores, ni cambiarlos, ni eliminarlos.
// Object.freeze(producto);

// producto.imagen = 'imagen.jpg';

// console.log(Object.isFrozen(producto));

// console.log(producto);
// console.log('**************');



// De esta forma no deja añadir mas valores, ni eliminarlos, SI cambiarlos.
Object.seal(producto);

producto.precio = 500;

delete producto.precio;

console.log(producto);
