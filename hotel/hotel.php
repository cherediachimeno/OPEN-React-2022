<?php

if(isset($_REQUEST['enviar'])){

    $noches = $_REQUEST['noches'];
    $ciudad = $_REQUEST['ciudad'];

    $coste = coste_hotel($noches);
    $avion = coste_avion($ciudad);
    $alquiler = coste_alquiler_coche($noches);
    $resultadoFinal = $coste + $avion + $alquiler;

    echo "Noches $noches <br>";
    echo "Coste hotel $coste <br>";
    echo "Ciudad elegida $ciudad <br>";
    echo "Coste avión $avion <br>";
    echo "El precio final, con el alquiler del coche incluido es de $resultadoFinal";
}

function coste_hotel($n){
    $coste_hotel = $n*140;
    return $coste_hotel;
}

function coste_avion($c){
    $coste_viaje = 0;

    if($c == "Oviedo") $coste_viaje = 150;
    else if($c == "Tokyo") $coste_viaje = 750;
    else if($c == "Madrid") $coste_viaje = 200;
    else if($c == "Barcelona") $coste_viaje = 250;

    return $coste_viaje;
}

function coste_alquiler_coche($n){
    $coste = 0;
    $coste = $n*40;

    if($n > 7) $coste = $coste - 50;
    else if($n > 3) $coste = $coste - 20;
    return $coste;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotel PHP</title>
</head>
<body>
    <form action="#">
        <label for="noches">Número de noches:</label>
        <input type="text" name="noches">
        <br>

        <label for="ciudad">Ciudad</label>
        <select name="ciudad" id="ciudad">
            <option value="Oviedo">Oviedo</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
        </select>

        <input type="submit" name="enviar">

    </form>
</body>
</html>