<?php include 'includes/header.php';

// Conectar a la DB con MySqli
$db = new mysqli('localhost','root','root','bienesraices');
// var_dump($db);

// Crear el query
$query = "SELECT titulo,imagen FROM propiedades";

//Preparamos
$stmt = $db->prepare($query);

//Ejecutamos
$stmt->execute();

// Creamos la variable
$stmt->bind_result($titulo,$imagen);

// Asignamos el resultado
// $stmt->fetch();



while ($stmt->fetch()):
    var_dump($titulo);
    var_dump($imagen);
endwhile;


// Imprimir el resultado
// var_dump($titulo);
// var_dump($imagen);



// while ($row = $resultado->fetch_assoc()):
//     var_dump($row);
// endwhile;


include 'includes/footer.php';