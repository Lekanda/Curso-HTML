// SWITCH
/*
    - Cuando hay muchas posibles condiciones.
*/

const metodoPago = 'cheque';

switch (metodoPago ) {
    case 'tarjeta':
        console.log('Es tarjeta');
        break;
    case 'cheque':
        console.log('Es cheque');
        break;

    default:
        console.log('Aun no has pagado');
        break;
}




