<?php include 'includes/header.php';
    // Crear una clase
    class Producto {
        public $nombre;
        public $precio;
        public $disponible;
    }
    $producto = new Producto();
    $producto->nombre = 'Tablet';
    $producto->precio = 100;
    $producto->disponible = true;
    echo ($producto->nombre);
    // echo "<pre>";
    // var_dump($producto);
    // echo "</pre>";
    
    $producto2 = new Producto();
    $producto2->nombre = 'Desktop PC';
    $producto2->precio = 1000;
    $producto2->disponible = false;
    echo "<pre>";
    var_dump($producto2);
    echo "</pre>";

include 'includes/footer.php';