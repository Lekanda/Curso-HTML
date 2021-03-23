<?php include 'includes/header.php';
// Modo 1
$carrito = ['Tablet','Movil','Desktop'];

echo '<br/>';
// UTIL PARA VER LOS CONTENIDOS DE UN ARRAY.
echo '<pre>';
var_dump($carrito);
echo '</pre>';
echo '<br/>';


// Acceder a un elemento del array
echo $carrito[1];
echo '<br/>';
$carrito[3] = 'PC';
echo $carrito[3];
echo '<br/>';
echo '<pre>';
var_dump($carrito);
echo '</pre>';
echo '<br/>';


// Añade al final del Arreglo.
array_push($carrito, 'Auriculares');
echo '<pre>';
var_dump($carrito);
echo '</pre>';



// Añade al inicio del Arreglo.
array_unshift($carrito, 'Web Cam');
echo '<pre>';
var_dump($carrito);
echo '</pre>';



// Modo 2
$carrito2 = array('Cliente1', 'Cliente2','Cliente3');
echo '<pre>';
var_dump($carrito2);
echo '</pre>';




include 'includes/footer.php';