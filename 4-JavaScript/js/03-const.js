// CONST. No se puede reasignar el valor.
// NO SE PUEDE INICIALIZAR UN CONST SIN VALOR !!!

const producto='Audifonos Gamer'; // Iniciar const varibles y asignar valor
let disponible; // Inicia const variable pero sin valor. INCORRECTO, hace falta valor.

// producto = true; // Reasignar el valor de la variable.
disponible = true; // No se puede asignar el valor de la disponible, es CONST.

// Iniciar muchas variables
const producto1='Computadora',
    disponible1= true,
    categoria='Computadoras';


// Las variables const pueden tener numeros y simbolos pero no pueden empezar con ellos

// const 1casa; // Incorrecto.
// const -casa; // Incorrecto.
// const _casa; // Incorrecto. Hace falta valor


// Estilos para las variables.
// const nombre_casa; // Underscore
// const nombreCasa; // Camelcase. El mas usual
// const NombreCasa; // Pascal case. Solo para clases
// const nombrecasa; // Lower case. El normal o menos utilizado en JS.

console.log(producto);