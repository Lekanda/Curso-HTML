<?php include 'includes/header.php';

$cliente = [
    'nombre' => 'Juan',
    'saldo' => 200,
    'informacion' => [
        'tipo' => 'Premium',
        'disponible' => '100'
    ]
];

echo '<pre>';
var_dump($cliente);
echo '</pre>';
echo '</br>';


var_dump($cliente['nombre']);
echo '</br>';
echo($cliente['nombre']);
echo '</br>';
echo($cliente['saldo']);
echo '</br>';


// echo($cliente['informacion']['tipo']);
echo '</br>';
// echo($cliente['informacion']['disponible']);


// Añadir mas propiedades al arreglo creado.
$cliente['codigo'] = 1215465454654;

echo '<pre>';
var_dump($cliente);
echo '<pre>';




include 'includes/footer.php';