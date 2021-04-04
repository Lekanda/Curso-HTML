<?php
    declare(strict_types = 1);
    include 'includes/header.php';



    // Crear una clase
    class Producto {
        public function __construct(public string $nombre,public int $precio,public bool $disponible){}
    }

    $producto = new Producto('Tablet',100, true);
    $producto3 = new Producto('Monitor',200, true);

    echo "<pre>";
    var_dump($producto);
    echo "</pre>";

    echo "<pre>";
    var_dump($producto3);
    echo "</pre>";

include 'includes/footer.php';