<?php include 'includes/header.php';

use App\Clientes;
use App\Detalles;

// Incluir las otras clases
function mi_autoload ($clase){
    // echo $clase;
    $partes = explode('\\', $clase);
    // var_dump($partes[1]);
    require __DIR__ . '/clases/' . $partes[1] . '.php';
}
// Manda llamar a las clases segun las necesita.
spl_autoload_register('mi_autoload');


$detalles = new Detalles();
$clientes = new Clientes();

include 'includes/footer.php';