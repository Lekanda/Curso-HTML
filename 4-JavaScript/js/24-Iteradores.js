// ********** ITERADORES *************

// FOR LOOP
for (let i = 0; i < 10; i++) {
    if (i%2 === 0) {
        console.log(`El numero ${i} es par`);
    } else{
        console.log(`El numero ${i} es impar`);
    }
}

console.log('******************************************');

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

for (let i = 0; i < carrito.length; i++) {
    const element = carrito[i];
    // console.log(element);
    console.log(`El producto ${element.nombre} vale ${element.precio} €`);
}





// WHILE LOOP



// DO WHILE



