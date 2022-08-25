recibirSeries();

function recibirSeries() {
  fetch("api/series")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let series = "";
      for (let i = 0; i < data.length; i++) {
        series += `
                <div>
                    <h3>${data[i].titulo}</h3>
                    <p>Plataforma: ${data[i].plataforma}</p>
                    <p>Nota: ${data[i].nota}</p>
                </div>
            `;
      }
      // USO DEL DOM. ¿QUÉ HAGO AQUÍ? IMPRIMO DESDE EL JS AL HTML 
      document.getElementById("div1").innerHTML = series;
    });
}

function buscar() {
  let titulo = document.getElementById("serieBuscar").value;

  fetch("/api/serie/" + titulo)
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      document.getElementById("div1").innerHTML = `
            <div >
                <h4>${datos[0].titulo}</h4>
                <p>Plataforma: ${datos[0].plataforma}</p>
                <p>Nota: ${datos[0].nota}</p>
            </div>
            `;
    });
}

function insertar() {
  const titulo = document.getElementById("titulo").value;
  const plataforma = document.getElementById("plataforma").value;
  const nota = parseInt(document.getElementById("nota").value);

  const serieInsertar = {
    titulo,
    plataforma,
    nota,
  };

  fetch("/api/nuevaSerie/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serieInsertar),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      console.log(datos);
      recibirSeries();
    });
}