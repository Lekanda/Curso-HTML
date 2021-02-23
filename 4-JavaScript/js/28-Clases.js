// Clases
class Producto{

    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    // Metodo del objeto en el prototype
    formatearProducto(){
        return `El producto ${this.nombre} vale ${this.precio}`;
    }
}
const producto = new Producto();

const producto1=new Producto('Monitor curvo 49 pulgadas"',800);
const producto2=new Producto('laptop',900);

console.log(producto1);
console.log(producto2);
console.log(producto2.formatearProducto());