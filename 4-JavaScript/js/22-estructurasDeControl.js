// Estructura de control (IF)
/*
    - = Iguala
    - == Compara
    - === compara el tipo de valor tambien.

    - != diferente
    - !== diferente
    - > Mayor que
    - < Menor que
    - >= Mayor o igual
    - <= Menor o igual
*/
const puntos=1000;

if (puntos === 1000) {
    console.log('Es 1000');
}

if (puntos === '1000') {
    console.log('Es string');
} else {
    console.log('Es otro tipo');
}



const rol='ADMINISTRADOR';

if (rol === 'ADMINISTRADOR') {
    console.log('Eres el admin.');
}else if (rol === 'EDITOR') {
    console.log('Eres Editor');
} else {
    console.log('No puedes entrar');
    
}