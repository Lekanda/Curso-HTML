<?php include 'includes/header.php';

function mi_autoload ($clase){
    require __DIR__ . '/clases/' . $clase . '.php';
}

// Manda llamar a las clases segun las necesita.
spl_autoload_register('mi_autoload');

$detalles = new Detalles();
$clientes = new Clientes();

include 'includes/footer.php';