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

        
        // Generar el HTML
        servicios.forEach(servicio => {
            // console.log(servicio);
            const {id,nombre,precio} = servicio;

            // DOM Scripting
            const nombreServicio = document.createElement('P');
            nombreServicio.textContent= nombre;
            nombreServicio.classList.add('nombre-servicio');
            // console.log(nombreServicio);

            const precioServicio = document.createElement('P');
            // precioServicio.textContent= '$' + ' ' + precio;
            precioServicio.textContent= `$ ${precio}`;
            precioServicio.classList.add('precio-servicio');
            // console.log(precioServicio);

            // Generar div contenedor de servicio
            const servicioDiv = document.createElement('DIV');
            servicioDiv.classList.add('servicio');
            servicioDiv.dataset.idServicio = id;


            // Selecciona un servicio para la cita
            servicioDiv.onclick = seleccionarServicio;



            // Inyectar precio y nombre al Div
            servicioDiv.appendChild(nombreServicio);
            servicioDiv.appendChild(precioServicio);

            // Inyectar al HTML
            document.querySelector('#servicios').appendChild(servicioDiv);


        });
    } catch (error) {
        console.log(error);
    }
}


function seleccionarServicio(e) {
    // console.log(e.target.tagName);

    // Como inicalizamos sin valor LET.
    let elemento;
    // Forzar que el elemento al cual le damos click sea el div.
    if (e.target.tagName === 'P'){
        elemento = e.target.parentElement;
    } else {
        // console.log('click en el DIV');
        elemento = e.target
    }
    console.log(elemento.dataset.idServicio);


    if (elemento.classList.contains('seleccionado')) {
        elemento.classList.remove('seleccionado');
    } else {
        elemento.classList.add('seleccionado');
    }

    
}
