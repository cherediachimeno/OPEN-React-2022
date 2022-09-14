<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página para insertar la información</title>
</head>
<body>
    <?php
        // PARA CONECTARNOS A UNA BASE DE DATOS NECESITAMOS 4
        // ELEMENTOS.
        // SERVER NAME, USERNAME, PASSWORD, DATABASE NAME

        // PRIMER PASO: VAMOS A CONECTARNOS
        $conn = mysqli_connect("localhost", "root", "", "staff");
        // SEGUNDO PASO: COMPROBAR CONEXIÓN
        if ($conn === false) {
            die("ERROR: Could not connect. ". mysqli_connect_error());
        }
        
        // TERCER PASO: RECUPERAR O TRABAJAR CON LOS VALORES 
        // QUE EL USUARIO HA AÑADIDO EN EL FORMULARIO

        $firstName = $_REQUEST['name'];
        $lastName = $_REQUEST['apellido'];
        $gender = $_REQUEST['genero'];
        $address = $_REQUEST['direccion'];
        $email = $_REQUEST['mail'];
        
        // CUARTO PASO: INSERTAR ESTOS ELEMENTOS A 
        // LA BASE DE DATOS ( A SU TABLA ). CREAMOS SENTENCIA SQL

        $sql = "INSERT INTO college VALUES ('$firstName', '$lastName', 
        '$gender', '$address', '$email')";

        // QUINTO PASO: EJECUTAR ESA SENTENCIA SQL

        if(mysqli_query($conn, $sql )) {
            echo "<h3>Guardado todo correctamente</h3>";
        } else {
            echo "ERROR. No va". mysqli_error($conn);
        }

        // SEXTO Y ÚLTIMO PASO: CERRAR CONEXIÓN

        mysqli_close($conn);
    ?>
    
</body>
</html>