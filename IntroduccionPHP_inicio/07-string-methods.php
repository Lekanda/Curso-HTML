<?php include 'includes/header.php';

$nombre = 'Andres Bernaola';

// Tamaño y extension del string. Toma en cuenta los espacios
echo strlen($nombre);
echo'<br/>';
var_dump($nombre);
echo'<br/>';

// Quitar espacios en blanco TRIM.
$texto = trim($nombre);
echo strlen($texto);
echo'<br/>';
echo $texto;
echo'<br/>';


// Convertir a Mayusculas.
echo strtoupper($texto);
echo'<br/>';
// Convertir a Minusculas.
echo strtolower($texto);
echo'<br/>';


// **** Mail; En el nombre de la cuenta de mail, da igual que sea may o minus(Correo/correo), es lo mismo. Pero en una DB al comparar puede decir que son distintas.
$mail1 = 'correo@correo1.com';
$mail2 = 'Correo@correo1.com';
// Da false. Las cuentas son distintas.
var_dump($mail1 === $mail2);
echo'<br/>';
// Da true; cambia a minusculas todo.
var_dump(strtolower($mail1) === strtolower($mail2));
echo'<br/>';
/**************************************/



// reemplaza en el string Andres x A.
echo str_replace('Andres', 'A', $nombre);
echo'<br/>';



// Revisar si un string existe o no.
echo strpos($nombre, 'Andres');// Da 0 , es la posicion de Andres en el string
echo'<br/>';


// Concatenar un String con una Variable (.)
// MODO 1
$tipoCliente ="Premium";
echo 'El cliente ' . $nombre . ' es ' . $tipoCliente;
echo'<br/>';
// MODO 2
// Solo funciona con comillas.
echo "El cliente {$nombre} es {$tipoCliente}";



include 'includes/footer.php';