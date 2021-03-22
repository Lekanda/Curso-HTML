<?php

// echo "Desde Servicios";

require "includes/funciones.php";

$servicios = obtenerServicios();

// echo "<pre>";
// var_dump($servicios);
// echo "</pre>";

echo json_encode($servicios);