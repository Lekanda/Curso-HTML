<?php 

function obtenerServicios(): array{
    try {
        
        // Importar una conexion
        require 'database.php';

        // Escribir el codigo sql
        $sql = "SELECT * FROM servicios;";

        $consulta  = mysqli_query($db,$sql);


        // Arreglo vacio
        $servicios = [];

        $i=0;


        // Obtener los resultados
        while ($row = mysqli_fetch_assoc($consulta)) {
            // echo "<pre>";
            // var_dump($row);
            // echo "</pre>";


            // $servicios[] => Al final del arreglo.
            $servicios[$i]['id'] = $row['id'];
            $servicios[$i]['nombre'] = $row['nombre'];
            $servicios[$i]['precio'] = $row['precio'];

            $i++;

        }

        // echo "<pre>";
        // var_dump($servicios);
        // echo "</pre>";

        return $servicios;
        



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


