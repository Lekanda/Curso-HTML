<?php include 'includes/header.php';

$clientes = [];
$clientes2 = array();
$clientes3 = array('Pedro','Juan','Karen');
$cliente = [
    'nombre'=>'Juan',
    'saldo'=>200
];

// Empty- Revisa si un arreglo esta vacio
var_dump( empty($clientes) );// Sí esta vacio da: true
echo '</br>';
var_dump( empty($clientes2) );// Sí esta vacio da: true
echo '</br>';
var_dump( empty($clientes3) );// Sí esta lleno da: false
echo '</br>';


//ISSET- Revisa si un arreglo esta creado o una propiedad esta definida.
echo 'Isset para revisar si existe el array ';
echo '</br>';
var_dump(isset($clientes4)); // Da false sí no existe.
echo '</br>';
var_dump(isset($clientes2)); // Da true sí existe.
echo '</br>';
// Isset tambien se puede usar para revisar si hay una propiedad en un array-asociativo.
echo 'Isset par propiedad de Array-Asociativo ';
echo '</br>';
var_dump(isset($cliente['nombre'])); // Da true sí existe.










include 'includes/footer.php';