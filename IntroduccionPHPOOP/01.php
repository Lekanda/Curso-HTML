<?php
    declare(strict_types = 1);
    include 'includes/header.php';



    // Crear una clase
    class Producto {
        public $nombre;
        public $precio;
        public $disponible;

        public function __construct(string $nombre, int $precio, bool $disponible)
        {
            $this->nombre = $nombre;
            $this->precio = $precio;
            $this->disponible = $disponible;
        }
    }

    $producto = new Producto('Tablet',100, true);
    $producto3 = new Producto('Monitor',200, true);

    echo "<pre>";
    var_dump($producto);
    echo "</pre>";

    echo "<pre>";
    var_dump($producto3);
    echo "</pre>";
    
    // $producto2 = new Producto();
    // $producto2->nombre = 'Desktop PC';
    // $producto2->precio = 1000;
    // $producto2->disponible = false;
    // echo ($producto2->nombre);
    // echo "<pre>";
    // var_dump($producto2);
    // echo "</pre>";

include 'includes/footer.php';