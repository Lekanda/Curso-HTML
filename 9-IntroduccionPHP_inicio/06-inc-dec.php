<?php include 'includes/header.php';

// Igual con -
$numero1 = 30;
$numero1++;
// 31
echo $numero1;
echo '<br/>';
// 31.lo imprime antes de sumar.
echo $numero1++;
echo '<br/>';
// 32
echo $numero1;
echo '<br/>';
// 33
echo ++$numero1;
echo '<br/>';
// 33
echo $numero1;
$numero1+=5; // Añade 5
// 38
echo '<br/>';
echo $numero1;

include 'includes/footer.php';