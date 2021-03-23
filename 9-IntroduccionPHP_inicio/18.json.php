<?php include 'includes/header.php';

$productos = [
    [
        'nombre' => 'Tablet',
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'PC',
        'precio' => 300,
        'disponible' => false
    ],
    [
        'nombre' => 'Desktop',
        'precio' => 400,
        'disponible' => true
    ]
];


echo "<pre>";
var_dump($productos);
// Convertir Array-Asociativo a Obj JSON.Lo convierte a String.
$json = json_encode($productos, JSON_UNESCAPED_UNICODE);
$json_array = json_decode($json);

var_dump($json); // Lo convierte a String.
var_dump($json_array); // Lo convierte a Array.
echo "</pre>";





include 'includes/footer.php';