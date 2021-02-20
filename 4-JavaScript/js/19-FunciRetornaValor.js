// Funciones que retornan valores.

function sumar(num1,num2) {
    return num1+num2;
}
const resul=sumar(2,2); // Da 2.
console.log(resul);

/************************************************/

let total = 0;
function agregarCarrito(precio) {
    return total+=precio;
}
function calcImpuesto(total) {
    return 1.15*total;
}
total=agregarCarrito(200);
total=agregarCarrito(400);
total=agregarCarrito(600);

console.log(total);


const totalPagar= calcImpuesto(total);
console.log(`Total: ${totalPagar}`);
