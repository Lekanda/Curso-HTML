//************* */ querySelector (Moderna) **************
const heading = document.querySelector('#heading') // Retorna 0 o 1 elemento.
heading.textContent = 'Nuevo Heading';
// Añade una clase nueva.
heading.classList.add('nueva-clase');
// console.log(heading);



//************* */ querySelectorAll (Moderna) **********************
// ***MODO 1
// const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces[0]);
// enlaces[0].textContent='Gurea';

// ***MODO 2 (Con una linea)
// const enlaces = document.querySelectorAll('.navegacion a')[0].textContent='Gurea';

// ***MODO 3 (Mas de una linea)
const enlaces = document.querySelectorAll('.navegacion a')
enlaces[0].textContent='Gurea';
enlaces[0].href='http://www.google.com';
enlaces[0].classList.add('nueva-clase2');
enlaces[0].classList.remove('nueva-clase2');
// console.log(enlaces[0]);



//************** */ getElementById (Vieja pero muy usada) **********
const heading2 = document.getElementById('heading');
// console.log(heading2);


/****************** createElement ********************/

const nuevoEnlace = document.createElement('A')

// Agregar HREF
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar el TXT
nuevoEnlace.textContent = 'Nuevo A';
// Agregar clases
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace)

// console.log(nuevoEnlace);


// EVENTOS

// console.log(1);

// Registrar los eventos
// window.addEventListener('load', function () {
//     console.log(2);
// });// load Espera a que la ventana este lista(cargada: html,img,css... ) y ejecuta la funcion(Callback).
// El resultado seria: 1,5,2 

// Otra forma (1,5,2,3)
// window.onload = function () {
//     console.log(3);
// }

// Evento con DOCUMENT (1,4,5,2,3); Solo espera a que se descargue el HTML. Lo hace antes que el load y onload. ESTE ES EL ADECUADO. Mas rapido
// document.addEventListener('DOMContentLoaded', function () {
//     console.log(4);
// })

// console.log(5);

// Otra forma con el callback por fuera.
// window.addEventListener('load', imprimir);
// function imprimir() {
//     console.log(6);
// }

// Evento al hacer scroll
// window.onscroll = function (e) {
//     console.log(e);
// }

// Seleccionar elementos y asocirles uno nuevo
const btnEnviar = document.querySelector('.boton--primario')
btnEnviar.addEventListener('click',function(e){
    // Evento
    console.log(e);
    // Elemento con evento.
    console.log(e.target);
    // Previene de la accion por default. P ejem para validar un form.
    e.preventDefault();

    // Vallidar un formulario



    console.log('Enviando....');
})



// Eventos de los inputs y textarea





