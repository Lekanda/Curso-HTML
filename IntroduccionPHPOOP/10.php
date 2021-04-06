<?php include 'includes/header.php';

// Conectar a la DB con PDO.
$db = new PDO('mysql:host=localhost; dbname=bienesraices', 'root','root');

// Crear el query
$query = "SELECT titulo,imagen FROM propiedades";

// lo preparamos
$stmt = $db->prepare($query);

/// Lo Ejecutamos
$stmt->execute();

// Obtener los resultados
// $resultado = $stmt->fetch();
$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Iterar para ver los resultados.
foreach ($resultado as $propiedad ) {
    echo $propiedad['titulo'];
    echo"<br>";
    echo $propiedad['imagen'];
    echo"<br>";
}



// echo "<pre>";
// var_dump($resultado);
// echo "</pre>";



// Consultar la DB
// $propiedades = $db->query($query)->fetch();
// $propiedades = $db->query($query)->fetchAll();
// $propiedades = $db->query($query)->fetchColumn();
// $propiedades = $db->query($query)->fetchObject();
// var_dump($propiedades);


include 'includes/footer.php';