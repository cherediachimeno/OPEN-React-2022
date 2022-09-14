<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo con Base de Datos (PHP)</title>
</head>
<body>
    <h1>Formulario para guardar información a la base de datos</h1>
    <form action="insert.php" method="post">
       
        <label for="name">Nombre</label>
        <input type="text" name="name" id="name">
        <br />
        <label for="apellido">Apellido</label>
        <input type="text" name="apellido" id="apellido">
        <br />
        <label for="genero">Género</label>
        <input type="text" name="genero" id="genero">
        <br />
        <label for="direccion">Dirección</label>
        <input type="text" name="direccion" id="direccion">
        <br />
        <label for="mail">Mail</label>
        <input type="text" name="mail" id="mail">
        <br />
        <button type="submit">Enviar</button>
    </form>
</body>
</html>