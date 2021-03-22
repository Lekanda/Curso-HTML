<?php 
// Tipos de variable estrictos(true)
declare(strict_types=1);
include 'includes/header.php';

// :void - quiere decir que la funcion no retorna nada.(Imprime y listo.)
// :string - quiere decir que la funcion retorna un string. Hace falta ponerle un  RETURN dentro de la funcion. Igual con FLOAT,ARRAY,INT,....
// :?string - Opcional puede ser una STRING.
// :string|int - O un STRING o un INT.
function usuarioAutenticado(bool $autenticado) : string|int {
    if ($autenticado) {
        return "El Usuario esta Autenticado";
    } else {
        return 20;
    }
}

$usuario = usuarioAutenticado(false);
echo $usuario;












include 'includes/footer.php';