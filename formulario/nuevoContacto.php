<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados formulario</title>
</head>
<body>
<div>
    <h1>Resultados formulario</h1>
        <div>Nombre ($_POST) : <?= $_POST['nombre']?></div>
        <div>Apellidos ($_REQUEST) : <?= $_REQUEST['apellidos']?></div>
        <div>Acepta condiciones ($_REQUEST) : <?= $_REQUEST['marcar']?></div>
</div>
</body>
</html>