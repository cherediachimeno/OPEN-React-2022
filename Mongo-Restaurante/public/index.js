mostrarDatos();

function enviarDatosPost(){
    let nombreMenu= document.getElementById("nombreMenu").value;
    let platoUno= document.getElementById("platoUno").value;
    let platoDos= document.getElementById("platoDos").value;
    let postre= document.getElementById("postre").value;
    let precio= document.getElementById("precio").value;
    let menu={"nombreMenu":nombreMenu,"platoUno":platoUno,"platoDos":platoDos,"postre":postre,"precio":precio}
    fetch("/api/nuevoMenu",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(menu)
    })
    location.reload();
}

function enviarDatosPut(){
    let nombreMenu= document.getElementById("nombrePut").value;
    let platoUno= document.getElementById("platoUnoPut").value;
    let platoDos= document.getElementById("platoDosPut").value;
    let postre= document.getElementById("postrePut").value;
    let precio= document.getElementById("precioPut").value;
    let menu={}
    menu.nombreMenu=nombreMenu;
        if (platoUno!=""){
            menu.platoUno=platoUno
        }
        if (platoDos!=""){
            menu.platoDos=platoDos
        }
        if (postre!=""){
            menu.postre=postre
        }
        if(precio!=""){
            menu.precio=precio
        }

    fetch(`/api/editarMenu`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(menu)
    
    })
    location.reload()
}

function enviarDatosDel(nombre){
    fetch(`/api/borrarMenu`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombreMenu:nombre})
    })
    location.reload();
}

function mostrarDatos(){
    fetch(`/api/menus`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => {let tabla=`<table border="2">
    <tr>
    <th colspan="6">MENÚS</th>
    </tr>
    <tr>
        <th>NOMBRE</th>
        <th>PLATO 1</th>
        <th>PLATO 2</th>
        <th>POSTRE</th>
        <th>PRECIO</th>
    </tr>`
    for(let i=0;i<data.length;i++){
    tabla+=`<tr>
    <th>${data[i].nombreMenu}</th>
    <th>${data[i].platoUno}</th>
    <th>${data[i].platoDos}</th>
    <th>${data[i].postre}</th>
    <th>${data[i].precio}</th>
    <th><button onclick="enviarDatosDel('${data[i].nombreMenu}')">Eliminar</button></th>
    </tr>`
    }
    tabla+=`</table>`
    document.getElementById("lista").innerHTML=tabla;
    
});

}