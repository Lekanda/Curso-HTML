// Funciones con Parametros.


// Declaracion de funcion
function sumar(num1,num2) {
    console.log(num1*num2);
}
sumar(2,2);


// Expresion de la Funcion.
const sumar3= function (num1,num2) {
    console.log(num1+num2);
}
sumar3(5,5);


// Algunas veces el parametro de una funcion es opcional . Se llama default param
function sumar2(num1,num2=0) {
    console.log(num1+num2);
}
sumar2(2); // Da 2.





