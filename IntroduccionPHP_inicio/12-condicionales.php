<?php include 'includes/header.php';

$autenticado = true;
$admin = false;
// &&:y  ||:o
if ($autenticado && $admin) {
    echo 'Usuario ok';
} else {
    echo 'Usuario no ok';
}
echo('<br/>');
/****************************************** */

// If anidado
$cliente = [
    'nombre' => 'Andres',
    'saldo' => 0,
    'informacion' => [
        'tipo' => 'Premium'
    ]
];
echo('<br/>');

if (!empty($cliente)) {
    echo 'El arreglo de cliente tiene datos';
    echo('<br/>');

    if ($cliente['saldo'] > 0) {
        echo("El cliente {$cliente['nombre']} tiene saldo");
        echo('<br/>');
    } else {
        echo 'No hay saldo';
    }
}
echo('<br/>');



/****************************************** */
// Else If
if ($cliente['saldo'] > 0) {
    echo "El cliente tiene saldo";
    echo('<br/>');
} elseif ($cliente['informacion']['tipo'] === 'Premium') {
    echo 'El cliente es premium';
    echo('<br/>');
} else {
    echo 'No hay cliente';
    echo('<br/>');
}

/***********************************************/
// Switch
$tecnologia = 'JS';

switch ($tecnologia) {
    case 'PHP':
        echo'El lenguaje es PHP';
        break;
    case 'JS':
        echo'El lenguaje es JS';
        break;
    default:
        echo 'Es otro lenguaje';
        break;
}


include 'includes/footer.php';