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

    // Validar y almacenar el nombre en el Objeto cita.
    nombreCita();
    fechaCita();

    // Deshabilita dias pasados para pedir cita.
    deshabilitarFechaAnterior();

    // Almacena la hora de la Cita
    horaCita();

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
    // console.log(elemento.dataset.idServicio);

    if (elemento.classList.contains('seleccionado')) {
        elemento.classList.remove('seleccionado');

        // console.log(elemento.dataset.idServicio);
        const id = parseInt(elemento.dataset.idServicio);

        eliminarServicio(id);
    } else {
        elemento.classList.add('seleccionado');
        // console.log(elemento.dataset.idServicio);
        // console.log(elemento.firstElementChild.textContent);
        // console.log(elemento.firstElementChild.nextElementSibling.textContent);

        const servicioObj = {
            id: parseInt(elemento.dataset.idServicio),
            nombre: elemento.firstElementChild.textContent,
            precio: elemento.firstElementChild.nextElementSibling.textContent
        } 
        // console.log(servicioObj);

        agregarServicio(servicioObj);
    }
}

function eliminarServicio(id) {
    // console.log('Eliminando Servicio....', id);

    const {servicios} = cita;
    cita.servicios = servicios.filter(servicio => servicio.id !== id);

    // console.log(cita);
}


function agregarServicio(servicioObj) {
    // console.log('Agregando Servicio....');

    const {servicios} = cita;

    cita.servicios = [...servicios, servicioObj];

    // console.log(cita);

}


function paginaSiguiente() {
    // console.log('siguiente');
    const paginaSiguiente = document.querySelector('#siguiente');
    paginaSiguiente.addEventListener('click', () => {
        pagina++;
        // console.log(pagina);

        botonesPaginador();
    })
}

function paginaAnterior() {
    // console.log('anterior');
    const paginaAnterior = document.querySelector('#anterior');
    paginaAnterior.addEventListener('click', () => {
        pagina--;
        // console.log(pagina);

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

        mostrarResumen(); // padina 3 Resumen
    } else {
        paginaAnterior.classList.remove('ocultar');
        paginaSiguiente.classList.remove('ocultar');
    }




    mostrarSeccion();// cambia la seccion que se muestra
}



function mostrarResumen() {
    console.log(cita);

    // Destructuring de cita
    const {nombre,fecha,hora,servicios} = cita;

    // Seleccionar el resumen(paso 3)
    const resumenDiv = document.querySelector('.contenido-resumen');


    // Limpia el HTML previo
    // En este caso WHILE es 20 veces mas rapido que hacerlo con INNERHTML.
    while (resumenDiv.firstChild) {
        resumenDiv.removeChild(resumenDiv.firstChild);
    }

    // Validacion de objeto.
    // console.log(Object.values(cita));
    if (Object.values(cita).includes('')) {
        // console.log('El objeto cita esta vacio');

        const noServicios = document.createElement('P');
        noServicios.textContent = 'Faltan datos para tu cita';
        noServicios.classList.add('invalidar-cita');
        // console.log(noServicios);

        // Agregar a Resumen DIV
        resumenDiv.appendChild(noServicios);
        // console.log(resumenDiv);
        return;
    }
    // Mostrar el resumen
    const nombreCita = document.createElement('P');
    nombreCita.innerHTML = `<span>Nombre:</span> ${nombre}`;

    const fechaCita = document.createElement('P');
    fechaCita.innerHTML = `<span>Fecha:</span> ${fecha}`;

    const horaCita = document.createElement('P');
    horaCita.innerHTML = `<span>Hora:</span> ${hora}`;



    resumenDiv.appendChild(nombreCita);
    resumenDiv.appendChild(fechaCita);
    resumenDiv.appendChild(horaCita);


    console.log(nombreCita);
}



/*
- input => se ejecuta cada vez que cambia (tecleo).
- Change => se ejecuta una vez le damos enter. 

- Trim Quita los espacios al principio y al final.
- Tambien TrimStart y TrimEnd.
*/
function nombreCita() {
    const nombreInput = document.querySelector('#nombre');
    nombreInput.addEventListener('input', (e) => {
        // console.log('escribiendo...');
        // console.log(e.target.value);
        const nombreTexto =  e.target.value.trim();
        // console.log(nombreTexto);

        // validar que el nombre txt debetener algo
        if (nombreTexto === '' || nombreTexto.length < 3 ) {
            mostrarAlerta('Nombre no valido...','error');
        } else {
            // console.log('Nombre correcto', e.target.value);
            const alerta = document.querySelector('.alerta');
            if (alerta) {
                alerta.remove();
            }
            cita.nombre = nombreTexto;
        }
        // console.log(cita);

    })
}


function mostrarAlerta(mensaje,tipo) {
    // console.log('El mensaje es: ', mensaje);

    // Sí hay una alerta previa, entonces nocrear otra.
    const alertaPrevia = document.querySelector('.alerta');
    if (alertaPrevia) {
        return;
    }


    // Crear el div para la alerta.
    const alerta = document.createElement('DIV');
    alerta.textContent= mensaje;
    alerta.classList.add('alerta');
    if (tipo === 'error') {
        alerta.classList.add('error');
    }
    // console.log(alerta);

    // Insertar en el HTML la Alerta
    const formulario = document.querySelector('.formulario');
    formulario.appendChild(alerta);


    // Eliminar la alerta despues de 3 sg
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}



function fechaCita() {
    const fechaInput = document.querySelector('#fecha');
    // console.log(fechaInput);

    fechaInput.addEventListener('input', e => {
        // console.log(e.target.value);// es una String

        // Convertir a fecha
        const dia = new Date(e.target.value).getUTCDay();
        // console.log(dia);

        // const opciones = {
        //     weekday: 'long',
        //     month: 'long',
        //     year: 'numeric',
        //     day: 'numeric'
        // }
        // console.log(dia.toLocaleDateString('es-ES', opciones));// Convierte fecha a Español.

        // Sí 0 o 6 esta incluido en dia(Sabado, Domingo)
        if ([0,6].includes(dia)) {
            // Prevenir la fecha mal puesta para que no se ponga
            e.preventDefault();
            fechaInput.value = '';
            mostrarAlerta('Seleccionaste Sabado o Domingo; No se trabaja', 'error');
        } else {
            // console.log('Dia Laboral');
            // console.log(fechaInput.value);
            cita.fecha = fechaInput.value;
        }

        // console.log(cita);

    })
}



// function deshabilitarFechaAnterior() {
//         const inputFecha = document.querySelector('#fecha');

//         const fechaAhora = new Date();
//         const year = fechaAhora.getFullYear();
//         const mes = fechaAhora.getMonth() + 1;
//         // Solo se puede reservar un dia adelante del actual. Por Organizacion de la peluqueria.
//         const dia = fechaAhora.getDate() + 1;




//         // Formato de fecha deseado: 2021-03-15
//         const fechaDeshabilitar = `${year}-${mes < 10 ? `0${mes}` : mes}-${dia}`

//         // console.log(fechaDeshabilitar);

//         inputFecha.min = fechaDeshabilitar;

// }

/*
- getFullYear : Da el año
- getDate : Da el dia
- getMonth : Da el mes; En JS Enero es el mes 0 no el 1.
*/

function deshabilitarFechaAnterior(){
 
    const inputFecha = document.querySelector('#fecha');
 
    
    fechaAhora = new Date();
    const year=fechaAhora.getFullYear();
    let mes=fechaAhora.getMonth()+1;
    let dia=fechaAhora.getDate()+1;
 
    //formato deseado 2021-02-22 (AAAA-MM-DD)
    const fechaDeshabilitar = `${year}-${mes < 10 ? `0${mes}` : mes}-${dia < 10 ? `0${dia}` : dia}`;
 
    console.log(fechaDeshabilitar);
    
    inputFecha.min = fechaDeshabilitar;
   
}

function horaCita() {
    const inputHora = document.querySelector('#hora');
    inputHora.addEventListener('input', e => {
        // console.log(e.target.value);

        const horaCita = e.target.value;
        const hora = horaCita.split(':');

        console.log(hora);
        // console.log(horaCita);

        if (hora[0] < 10 || hora[0] >18) {
            console.log('Hora no valida; Cerrado');
            mostrarAlerta('Cerrado', 'error');
            setTimeout(() => {
                inputHora.value = '';
            }, 2000);
        } else {
            // console.log('Hora valida');
            cita.hora = horaCita;
            console.log(cita);
        }
    })
}