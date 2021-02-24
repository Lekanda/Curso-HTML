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
    obtenerPrecio() {
        console.log(this.precio);
    }
}
const producto = new Producto();
const producto1=new Producto('Monitor curvo 49 pulgadas"',800);
// console.log(producto1);
// console.log(producto2);
console.log(producto1.formatearProducto());







// Herencia
class Libro extends Producto{
    constructor(nombre,precio,isbn){
        // Con super heredamos del constructor padre.
        super(nombre,precio);
        this.isbn=isbn;
    }
    formatearProducto(){
        // Con return va con TEMPLATE STRING
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`;
    }
    obtenerPrecio(){
        // Con console hay que poner otro.
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }
}
const libro = new Libro('JS la revolución',120,'64654654646546546');
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());



