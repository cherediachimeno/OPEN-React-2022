<?php

// RECOGIDA DE DATOS

    $operando1 = $_GET['operando1'];
    $operando2 = $_GET['operando2'];
    $operador = $_GET['operador'];

// CONDICIONAL QUE NOS PERMITIRÁ
// QUE LA CALCULADORA FUNCIONE

    if($operador == "+")$solucion = $operando1 + $operando2;
    else if($operador == "-")$solucion = $operando1 - $operando2;
    else if($operador == "*")$solucion = $operando1 * $operando2;
    else if($operador == "/")$solucion = $operando1 / $operando2;

    echo "La solución es ".$solucion;

?>