document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    // console.log('Iniciando app');
    mostrarServicios();
}

async function mostrarServicios() {
    // console.log('Consultando la DB');

    try {
        const resultado = await fetch('./servicios.json');
        const db = await resultado.json();
        // console.log(resultado);  
        // console.log(db);
        // console.log(db.servicios[0].precio);

        const {servicios} = db;
        // console.log(servicios);
        // console.log(servicios);


        // Generar el HTML
        servicios.forEach(servicio => {
            // console.log(servicio);
            const {id,nombre,precio} = servicio;
            // DOM Scripting

        });

    } catch (error) {
        console.log(error);
    }
}