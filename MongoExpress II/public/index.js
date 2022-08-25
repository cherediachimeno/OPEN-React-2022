recibirMenus();

function recibirMenus() {
  fetch("api/menus")
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      let menus = "";
      for (let i = 0; i < datos.length; i++) {
        menus += `
                <div>
                    <h4>${datos[i].numero}</h4>
                    <p>Primero: ${datos[i].primero}</p>
                    <p>Segundo: ${datos[i].segundo}</p>
                    <p>Postre: ${datos[i].postre}</p>
                    <p>Precio: ${datos[i].precio}</p>
                </div>
            `;
      }
      document.getElementById("div1").innerHTML = menus;
    });
}

function anyadir() {
  const numero = document.getElementById("numero").value;
  const primero = document.getElementById("primero").value;
  const segundo = document.getElementById("segundo").value;
  const postre = document.getElementById("postre").value;
  const precio = parseInt(document.getElementById("precio").value);

  let menu = {
    numero,
    primero,
    segundo,
    postre,
    precio,
  };

  fetch("/api/nuevoMenu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(menu),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      console.log(datos);
      recibirMenus();
    });
}

function editar() {
  const numero = document.getElementById("numero").value;
  const primero = document.getElementById("primero").value;
  const segundo = document.getElementById("segundo").value;
  const postre = document.getElementById("postre").value;
  const precio = parseInt(document.getElementById("precio").value);

  let menu = {
    numero,
    primero,
    segundo,
    postre,
    precio,
  };

  fetch("/api/editarMenu", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(menu),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      console.log(datos);
      recibirMenus();
    });
}

function eliminar() {
  const numero = document.getElementById("numeroBorrar").value;

  let numeroBorrar = {
    numero: numero,
  };

  fetch("/api/borrarMenu", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(numeroBorrar),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      console.log(datos);
      recibirMenus();
    });
}