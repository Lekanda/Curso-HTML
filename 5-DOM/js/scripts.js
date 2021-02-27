//************* */ querySelector (MOderna) **************
const heading = document.querySelector('#heading') // Retorna 0 o 1 elemento.
heading.textContent = 'Nuevo Heading';
// Añade una clase nueva.
heading.classList.add('nueva-clase');
// console.log(heading);


//************* */ querySelectorAll (Moderna) **********************
// MODO 1
// const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces[0]);
// enlaces[0].textContent='Gurea';

// MODO 2 (Con una linea)
// const enlaces = document.querySelectorAll('.navegacion a')[0].textContent='Gurea';

// MODO 3 (Mas de una linea)
const enlaces = document.querySelectorAll('.navegacion a')
enlaces[0].textContent='Gurea';
// enlaces[0].href='http://www.google.com';
enlaces[0].classList.add('nueva-clase2');
enlaces[0].classList.remove('nueva-clase2');
// console.log(enlaces[0]);



//************** */ getElementById (Vieja pero muy usada) **********
const heading2 = document.getElementById('heading');
console.log(heading2);
