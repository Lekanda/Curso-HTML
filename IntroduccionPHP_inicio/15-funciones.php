<?php 
// declare: hace que los tipos de var sean int a la fuerza. Es para que no se pueda poner mas que un int.
declare(strict_types=1);
include 'includes/header.php';



function sumar(int $num1=0,int $num2=0){
    echo $num1+$num2;
}

sumar(5,5);
echo '<br>';
sumar(15,75);
echo '<br>';
sumar(75);
echo '<br>';
sumar();
echo '<br>';
sumar(10,5);

include 'includes/footer.php';