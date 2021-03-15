let pagina = 1;

const cita = {
    nombre:'',
    fecha:'',
    hora:'',
    servicios:[]
}

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    // console.log('Iniciando app');
    mostrarServicios();

    // Resalta el div actual segun el tab al que se presiona.
    mostrarSeccion();

    // Oculta o muestra una seccion segun el tab al que se presiona
    cambiarSeccion();

    // Paginacion siguiente y anterior
    paginaSiguiente();
    paginaAnterior();

    // Compruebe la pagina para ocultar los botones de sigui y ant.
    botonesPaginador();

    // Muestra el resumen de la cita o mensaje de error sí no pasa la validacion.
    mostrarResumen();

}


function mostrarSeccion() {
    // Eliminar .mostrar-seccion de la seccion anterior
    const seccionAnterior = document.querySelector('.mostrar-seccion');
    if (seccionAnterior ) {
        seccionAnterior.classList.remove('mostrar-seccion');
    }

    const seccionActual = document.querySelector(`#paso-${pagina}`);
    seccionActual.classList.add('mostrar-seccion');

    const tabAnterior = document.querySelector('.tabs .actual');
    if (tabAnterior) {
        tabAnterior.classList.remove('actual');
    }
    // Resalta el Tab actual
    const tab = document.querySelector(`[data-paso="${pagina}"]`);
    tab.classList.add('actual');
}



function cambiarSeccion() {
    const enlaces = document.querySelectorAll('.tabs button')

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', e => {
            e.preventDefault();
            // console.log('Click en un boton...');
            // console.log(e.target.dataset);
            // console.log(e.target.dataset.paso);


            // Lo coje del data-set del HTML
            pagina = parseInt(e.target.dataset.paso);

            // Llamar la funcion de mostrar seccion
            mostrarSeccion();
            botonesPaginador();

        })
    });
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
    // Forzar que el elemento al cual le damos click sea el div que es donde esta el id.
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


function paginaSiguiente() {
    // console.log('siguiente');
    const paginaSiguiente = document.querySelector('#siguiente');
    paginaSiguiente.addEventListener('click', () => {
        pagina++;
        console.log(pagina);

        botonesPaginador();
    })
}

function paginaAnterior() {
    // console.log('anterior');
    const paginaAnterior = document.querySelector('#anterior');
    paginaAnterior.addEventListener('click', () => {
        pagina--;
        console.log(pagina);

        botonesPaginador();
    })
    
}


function botonesPaginador() {
    const paginaSiguiente = document.querySelector('#siguiente');
    const paginaAnterior = document.querySelector('#anterior');

    if (pagina === 1) {
        // console.log('El boton de ant no se debe mostrar');
        paginaSiguiente.classList.remove('ocultar');
        paginaAnterior.classList.add('ocultar');
    } else if (pagina === 3) {
        paginaSiguiente.classList.add('ocultar');
        paginaAnterior.classList.remove('ocultar');
    } else {
        paginaAnterior.classList.remove('ocultar');
        paginaSiguiente.classList.remove('ocultar');
    }




    mostrarSeccion();// cambia la seccion que se muestra
}



function mostrarResumen() {
    // console.log(cita);

    // Destructuring de cita
    const {nombre,fecha,hora,servicios} = cita;

    // Seleccionar el resumen(paso 3)
    const resumenDiv = document.querySelector('.contenido-resumen');

    // Validacion de objeto.
    // console.log(Object.values(cita));
    if (Object.values(cita).includes('')) {
        // console.log('El objeto cita esta vacio');

        const noServicios = document.createElement('P');
        noServicios.textContent = 'Faltan datos para tu cita';
        noServicios.classList.add('invalidar-cita');
        console.log(noServicios);

        // Agregar a Resumen DIV
        resumenDiv.appendChild(noServicios);
        console.log(resumenDiv);
    }
}