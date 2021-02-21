// THIS
/* 
    - THIS hace referencia a las variables del mismo objeto.
    - Se puede hacer tmb reserva.nombre, pero ata a la variable.
    - Solo funciiona con Function. NO FUNCIONA CON ARROW FUNCTION. Para que funcione hay que declarar las variables fuera del objeto con: window.nombre = 'Un Nombre';
*/
const reserva ={
    nombre:'Juan',
    apellido:'Bernaola',
    total: 5000,
    pagado:false,
    informacion: function () {
        if (this.pagado == false) {
            console.log(this);
            // console.log(`Don ${this.nombre} ${this.apellido} debe la cantidad de ${this.total}€`);
        }
    }
}


console.log(reserva);
console.log(reserva.total);
reserva.informacion();


