<?php include 'includes/header.php';

// WHILE (1ºEvalua - 2º Ejecuta)
$i = 0; // Inicilizador
while ($i<10) {
    echo $i . '<br>';
    $i++;
}
echo '<br>';
// DO WHILE. (1º Ejecuta el codigo - 2º Evalua)
$i = 0; // Inicilizador
do{
    echo $i . '<br>';
    $i++;
} while($i<10);

echo '<br>';

// FOR LOOP (1ºEvalua - 2º Ejecuta)
for ($i=0; $i < 10; $i++) { 
    echo $i . '<br>';
}


/**
 * Multiplo de 3 imprimir Fizz
 * Multiplo de 5 imprimir Buzz
 * Multiplo de 3 y 5 Fizz Buzz
 */

for ($i=1; $i < 100; $i++) { 
    if ($i%15 === 0) {
        echo "{$i}: Multiplo de 3 y 5  FizzBuzz";
        echo '<br>';
        } elseif ($i%3 == 0) {
            echo "{$i}: Multiplo de 3 Fizz";
            echo '<br>';
        } elseif ($i%5 == 0) {
            echo "{$i}: Multiplo de 5 Buzz";
            echo '<br>';
        }
}
        
        
        
// FOR EACH
$clientes = array('Pedro','Juan','Luis');
foreach ($clientes as $cliente ) {
    echo "El Nombre es: {$cliente}"."<br>";
    echo '<br>';
}
// Contar longitud del array.
echo count($clientes);
echo '<br>';
echo sizeof($clientes);
echo '<br>';
// Recorrer el Array con FOR.
for ($i=0; $i < count($clientes); $i++) { 
    echo $clientes[$i] . '<br>';
}


// Recorrer un Arreglo-asociativo
$cliente = [
    'nombre' => 'Juan',
    'saldo' => 200,
    'tipo' => 'Premium'
];
foreach ($cliente as $key => $valor) {
    echo "El {$key} es: {$valor}"."<br>";
    echo '<br>';
}









include 'includes/footer.php';