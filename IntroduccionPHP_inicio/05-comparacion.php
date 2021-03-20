<?php include 'includes/header.php';

$numero1 = 20;
$numero2 = 30;
$numero3 = 30;
$numero4 = "30";

// Da False 
var_dump($numero1 > $numero2);
echo '<br/>'; 
// Da true
var_dump($numero1 < $numero2);
echo '<br/>'; 
// Da true
var_dump($numero1 <= $numero2);
echo '<br/>'; 
// Da false
var_dump($numero1 >= $numero2);
echo '<br/>'; 
var_dump($numero2 == $numero3);
echo '<br/>'; 
// Da true aunque el tipo de dato sea diferente(==).
var_dump($numero2 == $numero4);
echo '<br/>'; 
// Comprueba valor y tipo de dato(===).
var_dump($numero2 === $numero4);
echo '<br/>'; 

/*
- <=> : da este resultado:
    - 1: sí el de la izq es mayor 
    - 0: sí son iguales 
    - -1: sí el de la drch es mayor 
*/
var_dump($numero1 <=> $numero2);
echo '<br/>'; 






include 'includes/footer.php';