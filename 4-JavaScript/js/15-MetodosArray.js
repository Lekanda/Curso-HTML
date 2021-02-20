// Mas METODOS para Arrays
/****************************/
const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');

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

/****************************/

// FOREACH
meses.forEach(mes => {
    if (mes == 'Marzo'){
        console.log('Marzo esta');
    }
});

// INCLUDES
// INCLUDES NO FUNCIONA EN UN ARRAY DE OBJETOS.
let resultado=meses.includes('Marzo');
console.log(resultado);


// SOME. Ideal para un Array de objetos
resultado=carrito.some(producto => producto.nombre === 'Movil');
console.log(resultado);



// REDUCE (Coge los numeros y te da un resultado)
resultado = carrito.reduce((total, producto) => total + producto.precio, 0) ;
console.log(resultado);


// FILTER
resultado= carrito.filter(producto => producto.precio > 400)
console.log(resultado);



