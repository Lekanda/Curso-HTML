<?php include 'includes/header.php';
// Variables
$nombre = 'Andres';
// GuionBajo es valido al inicio de la var.
$_nombre = 'Andres';
echo $nombre;
// Indica el tipo y longitud
var_dump($nombre);

echo '<br>';

// Constantes
define('constante', 'Valor de constante');
echo constante;

echo '<br>';

const constante2 = 'Valor de constante 2';
echo constante2;



include 'includes/footer.php';