// POO (Programacion orientada a objetos)


/* Object Literal */
const producto = {
    nombre: 'Tablet',
    precio:500
}

/* Object Contructor */
function Producto(nombre,precio,disponible) {
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=disponible;

}
const producto2=new Producto('Monitor curvo 49 pulgadas"',800, true);
const producto3=new Producto('Monitor curvo 4 pulgadas"',90, true);
const producto4=new Producto('Monitor curvo 45 pulgadas"',30, true);
const producto5=new Producto('Monitor curvo 48 pulgadas"',844, true);

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
