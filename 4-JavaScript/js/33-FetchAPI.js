// FETCH API
async function obtenerEmpleados() {
    const archivo = "empleados.json";
    fetch(archivo)
        // // Le decimos quue lo que va a encontrar es un JSON
        // .then(resultado=> resultado.json())
        // // Leemos los datos del JSON
        // .then(datos => {
        //     const {empleados}=datos;
        //     console.log(empleados);
        // })

    const resultado = await fetch(archivo);
    // console.log(resultado);
    const datos = await resultado.json();
    console.log(datos);

}
obtenerEmpleados();

/*
- 200 = Conexion hecha
- 404 = Conexion Fallida.
*/