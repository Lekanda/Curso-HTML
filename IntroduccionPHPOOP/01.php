<?php
    declare(strict_types = 1);
    include 'includes/header.php';



    // Crear una clase
    class Producto {
        public function __construct(public string $nombre,public int $precio,public bool $disponible){}
        public function mostrarProducto(){
            echo "El Producto es: " . $this->nombre . " y vale: " . $this->precio;
        }
    }

    $producto = new Producto('Tablet',100, true);
    $producto->mostrarProducto();
    
    $producto3 = new Producto('Monitor',200, true);
    $producto3->mostrarProducto();

include 'includes/footer.php';