// ASYNC AWAIT

function descargarNuevosClientes() {
    return new Promise(resolve=>{
        console.log('Descargando clientes....');

        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 5000);

    });
}

function descargarUltimosPedidos() {
    return new Promise(resolve=>{
        console.log('Descargando ultimos pedidos....');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000);

    });
}

async function app(){
    try {
        // const clientes = descargarNuevosClientes();
        // const pedidos = descargarUltimosPedidos();
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();

// console.log('Este codigo no se bloquea');


// Temporizador
// setTimeout(function () {
//     console.log('set time out....');
// }, 5000);


/// Intervalos
// setInterval(function () {
//     console.log('set Interval....');
// }, 1000);


