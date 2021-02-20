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


// Agregar elementos
numeros[5]= 60;
// Otra forma de agregar elementos a un Array. Añade al final del array
numeros.push(70);
numeros.push(80,90,100);
/*
- Hoy en dia se recomineda no cambiar los valores originales de un array. Por eso ya no se utiliza.
*/
// Añade al inicio del array.
numeros.unshift(-10,-20,-30,-40,-50);

meses.pop(); // Elimina el ultimo elemento
meses.shift();// Elimina el primer elemento

// Borra 1 elemento a partir del 2.
meses.splice(2, 1);

console.log(meses);


/*
- Un nuevo enfoque es no modificar los datos originales en un Array. 
- La opcion es crear uno nuevo con los datos necesarios.
*/
// REST o SPREAD Operator.
// creamos un nuevo array con otro ya creado y despues le añadimos un valor mas al array. RECOMENDADO
const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);










