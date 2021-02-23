// POO (Programacion orientada a objetos)

/* Object Literal */
const producto = {
    nombre: 'Tablet',
    precio:500
}

/* Object Contructor */
function Cliente(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

// El PROTOTYPE nos permite crear funciones que estan unidas a un objeto. Y se guardan en su PROTOTYPE.
Cliente.prototype.formatearCliente = function() {
    return `SR ${this.nombre}  ${this.apellido} y Usia`;
}




function Producto(nombre,precio,disponible) {
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=disponible;
}
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} vale ${this.precio}`;
}


const producto2=new Producto('Monitor curvo 49 pulgadas"',800, true);
const producto3=new Producto('laptop',900, true);
const cliente = new Cliente('Juan', 'De la Torre');



console.log(producto2);
console.log(producto3);
console.log(cliente);

console.log(producto3.formatearProducto());

console.log(cliente.formatearCliente());





