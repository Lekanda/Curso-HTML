// ASYNC AWAIT

function descargarNuevosClientes() {
    return new Promise(resolve=>{
        console.log('Descargando clientes....');

        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 5000);

    });
}

async function app(){
    try {
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
app();

console.log('Este codigo no se bloquea');


// Temporizador
// setTimeout(function () {
//     console.log('set time out....');
// }, 5000);


/// Intervalos
// setInterval(function () {
//     console.log('set Interval....');
// }, 1000);


