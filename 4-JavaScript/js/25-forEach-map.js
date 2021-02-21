const carrito = [
    { nombre:'Monitor 20 Pulgadas', precio: 500 },
    { nombre:'Television 50 Pulgadas', precio: 700 },
    { nombre:'Tablet', precio: 300 },
    { nombre:'Audifonos', precio: 200 },
    { nombre:'Teclado', precio: 50 },
    { nombre:'Movil', precio: 500 },
    { nombre:'Bocinas', precio: 300 },
    { nombre:'Laptop', precio: 800 },
];

/*
    - Solo se pueden usar en arreglos.
    - FOR EACH es para imprimir cosas en el HTML o Consola. Solo lo lee
    - MAP crea un arreglo nuevo con lo que le pedimos.
*/
// FOR EACH
carrito.forEach(element => console.log(element.nombre));
const array1=carrito.forEach(element => element.nombre); // Da undefined
// MAP
carrito.map(element => console.log(element.nombre));
const array2=carrito.map(element => `${element.nombre} - ${element.precio}`);// crea uno nuevo.

console.log(array1);
console.log(array2);


console.log('********************************************');
