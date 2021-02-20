// FUNCIONES
/*
- Una serie de procedimientos o instrucciones.
- Permite un codigo mas ordenado.
- Son reutilizables
- Hay 3 formas: declaracion, expresion, IIFE
*/

// Declaracion de funcion
function sumar() {
    console.log(10*10);
}
sumar();

// Expresion de la Funcion.
const sumar2= function () {
    console.log(3+3);
}
sumar2();

// IIFE
// Funcion sin nombre y se manda a llamar ella misma. No se recomienda su reutilizacion. Son utiles para que las variables y funciones no se mezclen con otros archivos. Previene que las variables no se puedan descar desde otro archivo, enlazados mediante el script del HTML.
(function(){
    console.log('Esto es una funcion');
})();


// HOISTING
/*
- JavaScript se ejecuta en 2 etapas
    1- REGISTRO. Se registran las funciones en JS.
    2- EJECUCION. Se llaman a las funciones.
- En el caso de la Expresion de la Funcion. No funciona por que lo coje como una variable.
*/
// Declaracion de funcion
sumar();
function sumar() {
    console.log(10*10);
}

// Expresion de la Funcion.
sumar3();
const sumar3= function () {
    console.log(3+3);
}


