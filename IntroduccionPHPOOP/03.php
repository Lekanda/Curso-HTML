<?php
    declare(strict_types = 1);
    include 'includes/header.php';

    // Metodos Estaticos


    class Producto {
        public $imagen;
        public static $imagenplaceholder = "imagen.jpg";


        public function __construct(protected string $nombre,public int $precio,public bool $disponible,  string $imagen){
            if ($imagen) {
                self::$imagenplaceholder = $imagen;
            }
        }

        public static function obtenerImagenProducto(){
            return self::$imagenplaceholder;
        }



        public static function obtenerProducto(){
            echo "Obteniendo Producto";
        }


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

    echo Producto::obtenerImagenProducto();

    $producto = new Producto('Tablet',100, true,'');

    echo $producto->obtenerImagenProducto();


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
    
    echo Producto::obtenerProducto();
    echo "<br>";
    
    $producto3 = new Producto('Monitor',200, true,'monitorCurvo.jpg');
    echo $producto3->getNombre();
    echo $producto->obtenerImagenProducto();


include 'includes/footer.php';