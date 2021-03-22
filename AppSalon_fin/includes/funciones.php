<?php 

function obtenerServicios(){
    try {
        
        // Importar una conexion
        require 'database.php';

        // Escribir el codigo sql
        $sql = "SELECT * FROM servicios;";

        $consulta  = mysqli_query($db,$sql);

        // Obtener los resultados
        echo "<pre>";
        var_dump(mysqli_fetch_assoc( $consulta ));
        echo "</pre>";
        /**
         * mysqli_fetch_all: Trae todos
         * mysqli_fetch_array: trae el primero como un array
         * mysqli_fetch_assoc: Trae el ultimo com un Array-Asociativo
         */
    } catch (\Throwable $th) {
        //throw $th;
        var_dump($th);
    }
}

obtenerServicios();


