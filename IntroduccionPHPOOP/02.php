<?php
    declare(strict_types = 1);
    include 'includes/header.php';

    // Encapsulacion
    


    // Crear una clase
    class Producto {
        public function __construct(protected string $nombre,public int $precio,public bool $disponible){}
        public function mostrarProducto() : void {
            echo "El Producto es: " . $this->nombre . " y vale: " . $this->precio;
        }
        // Obtener el nombre
        public function getNombre() : string {
            return $this->nombre;
        }
        // cambiar el nombre
        public function setNombre(string $nombre){
            $this->nombre = $nombre;
        }
    }

    $producto = new Producto('Tablet',100, true);
    echo $producto->getNombre();
    echo "<br>";
    $producto->setNombre('Desktop');
    echo $producto->getNombre();
    echo "<br>";
    echo"<pre>";
    var_dump($producto);
    echo"</pre>";

    echo "<br>";
    echo "<br>";
    echo "<br>";
    
    $producto3 = new Producto('Monitor',200, true);
    echo $producto3->getNombre();

include 'includes/footer.php';