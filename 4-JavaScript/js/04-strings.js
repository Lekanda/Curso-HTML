// STRINGS
// Valen tanto las "" como las ''

// String o cadena de txt
const tweet = "Aprendiendo JS con el curso de Desarrollo Completo";
const producto2 = 'Monitor de 30"';


//*** Lenght. ***
// Es una propiedad, no un metodo. No hay que poner ().
// Nos da el numero de caracteres de la cadena.

console.log(tweet.length);
console.log(producto2);

// **** IndexOf ****
// Para buscar algo en la cadena. En este caso 'JS'.
// Devuelve en que numero de caracter esta.
// Devuelve -1 si no hay.
console.log(tweet.indexOf('JS'));


/*******  Includes(retorna true o false)  *******/
// Para buscar algo en la cadena. En este caso 'JS'. Mejor que indexOf.
// Devuelve true o false.
console.log(tweet.includes('JS'));






