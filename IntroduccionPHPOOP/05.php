<?php include 'includes/header.php';

abstract class Transporte{
    public function __construct(protected int $ruedas, protected int $capacidad)
    {
        
    }
    
    public function getInfo():string{
        return "El transporte tiene: " . $this->ruedas . " ruedas, y una capacidad de " . $this->capacidad . " persona/s";
    }
    
    public function getRuedas(){
        return $this->ruedas;
    }
}

class Bicicleta extends Transporte{
    public function getInfo() : string {
        return "El transporte tiene: " . $this->ruedas . " ruedas, y una capacidad de " . $this->capacidad . " persona/s. Y no gasta gasolina";
    }
}

class Automovil extends Transporte{
    public function __construct(protected int $ruedas, protected int $capacidad,protected string $transmision)
    {
        
    }
    public function getInfo():string{
        return "El transporte tiene: " . $this->ruedas . " ruedas, y una capacidad de " . $this->capacidad . " persona/s y una transmision " . $this->transmision;
    }
}



$bicicleta = new Bicicleta(2,1);
echo $bicicleta->getInfo();
echo "<hr>";

$automovil = new Automovil(4,5,'Automatica');
echo $automovil->getInfo();
echo "<hr>";

echo $bicicleta->getRuedas();
echo $bicicleta->getInfo();
echo "<hr>";

echo $automovil->getRuedas();
include 'includes/footer.php';