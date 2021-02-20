// Arrays

/// Forma normal
const numeros = [10,20,30,40,50];
// console.log(numeros);
// console.table(numeros);


// Con un constructor
const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');
// console.table(meses);


// Puede haber diferentes tipos de datos en un Array.
const arreglo = ["Hola mundo", 10,true, "si", null, {nombre:"Andres",apellidos:"Bernaola"}, [1,2,3,4,5,6]];
// console.log(arreglo);
// console.table(arreglo);


// Obtener datos de un Array.
// console.log(numeros[2]);
// console.log(numeros[0]);
// console.log(numeros[200]); // No existe => Undefined


// Conocer la extension de un arreglo. Numero de elementos.
// console.log(numeros.length);
// Iterador con funcion
meses.forEach(function(mes) {
    // console.log(mes);
});
// Iterador con Arrow Function (Recomendado).
numeros.forEach(numero => {
    // console.log(numero);
});



