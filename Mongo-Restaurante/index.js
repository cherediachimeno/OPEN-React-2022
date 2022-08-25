// Crearemos una app que nos permitirá gestionar menús. 
// Las propiedades que tendrá: nº plato, primer plato, segundo plato, postre, precio.

// ELEMENTOS DE USO DE EXPRESS JS - LEVANTAMOS SERVIDOR
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ELEMENTOS DE USO DE MONGO DB

const mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;

// CONEXIÓN A MONGO DB 

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    if (err != null) {
        console.log(err);
        console.log("No se ha podido conectar con MongoDB");
    } else {
        app.locals.db = client.db("Restaurante");
        console.log("MongoDB conectado");
    }
});

// PRIMERA RUTA, DONDE INSERTAREMOS LOS MENU

app.post('/api/nuevoMenu', function (req, res) {
    let nombreMenu = req.body.nombreMenu;
    let platoUno = req.body.platoUno;
    let platoDos = req.body.platoDos;
    let postre = req.body.postre;
    let precio = req.body.precio;

    let menu = {
        "nombreMenu": nombreMenu,
        "platoUno": platoUno,
        "platoDos": platoDos,
        "postre": postre,
        "precio": precio
    }

    app.locals.db
        .collection('menus')
        .insertOne(
            menu,
            function (err, respuesta) {
                if (err != null) {
                    console.log(err);
                } else {
                    res.send({ results: respuesta })
                }
            })
});

// RUTAS ADICIONALES

app.get('/api/menus', function (req, res) {
    app.locals.db
        .collection('menus')
        .find()
        .toArray(
            function (err, datos) {
                if (err != null) {
                    console.log(err);
                    res.send({ mensaje: "error: " + err });
                } else {
                    console.log(datos);
                    res.send(datos);
                }
            });
});

app.put("/api/editarMenu", function (req, res) {
    let modificacion = req.body;
    app.locals.db
        .collection('menus')
        .updateOne({ nombreMenu: req.body.nombreMenu }, { $set: modificacion },
            function (err, datos) {
                if (err != null) {
                    console.log(err);
                    res.send({ mensaje: "error: " + err });
                }
                else {
                    console.log(datos);
                    res.send(datos);
                }
            });
});

app.delete("/api/borrarMenu", function (req, res) {
    app.locals.db
        .collection('menus')
        .deleteMany({ nombreMenu: req.body.nombreMenu },
            function (err, datos) {
                if (err != null) {
                    console.log(err);
                    res.send({ mensaje: "error: " + err });
                }
                else {
                    console.log(datos);
                    res.send(datos);
                }
            });
});

// PUERTO A UTILIZAR

app.listen(process.env.PORT || 3001);


