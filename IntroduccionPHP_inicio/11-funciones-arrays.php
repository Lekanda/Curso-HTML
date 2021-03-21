<?php include 'includes/header.php';
// IN_ARRAY: Busca elementos en un array
$carrito = ['Tablet','Computadora','Tv'];
var_dump(in_array('Tablet',$carrito));// true
echo '<br/>';
var_dump(in_array('cascos',$carrito));// false
echo '<br/>';

/********************************************* */

// Ordenar los elmentos de 1 Array. SORT
$numeros = array(1,35,17,42,56,90,200);
sort($numeros);// De menor a mayor
rsort($numeros);// De mayor a menor
echo '<pre>';
var_dump($numeros);
echo '<pre/>';
// Ordenar arreglo asociativo
$cliente = array(
    'saldo' => 200,
    'tipo' => 'Premium',
    'nombre' => 'Juan'
);

echo '<pre>';
var_dump($cliente);
echo '<pre/>';
// Tambien arsort()
asort($cliente); // Ordena por valores alfabeticamente
arsort($cliente); // Ordena por valores alfabeticamente pero al reves
ksort($cliente); // Ordena por propiedades alfabeticamente
krsort($cliente); // Ordena por propiedades alfabeticamente pero al reves
echo '<pre>';
var_dump($cliente);
echo '<pre/>';



include 'includes/footer.php';