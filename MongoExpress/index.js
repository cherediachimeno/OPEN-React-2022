const express = require("express");
const app = express();

const port = process.env.PORT || 3005; // Puerto asignado

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// CONECXION MONGODB LOCAL
MongoClient.connect("mongodb://localhost:27017", function (err, client) {
  err
    ? (console.log("MongoDB no conectado"), console.log(`error: ${err}`))
    : ((db = client.db("televisión")),
      console.log("MongoDB se ha conectado correctamente"));
});


// RUTAS 
app.get("/api/series", mostrarSeries);
app.post("/api/nuevaSerie", añadirSerie);
app.get("/api/serie/:titulo", buscarSerie);


// CONTROLADOR - VER TODAS LAS SERIES  
  function mostrarSeries (req, res) {
   db.collection("series").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
 };


// CONTROLADOR - AÑADIR SERIE
 function añadirSerie (req, res) {
  const serie = {
    titulo: req.body.titulo,
    plataforma: req.body.plataforma,
    nota: req.body.nota,
  };
    db.collection("series").insertOne(serie, function (err, res) {
      if (err) throw err;
      console.log("1 documento insertedo");
    });
    res.redirect('/api/series');
};
  

// CONTROLADOR - BUSCAR SERIES POR TITULO
function buscarSerie (req, res) {
  const titulo = req.params.titulo;
    db.collection("series").find({ titulo: titulo }).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });

};


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});