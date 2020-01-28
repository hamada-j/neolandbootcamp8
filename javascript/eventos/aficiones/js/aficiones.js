var boton = document.getElementById('btn');
var listaAficiones = new Array();
var seccionAficiones = document.querySelector('#listaAficiones');
var ultimoId = 1;

boton.addEventListener('click', e => {
    e.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var aficion = document.getElementById('aficion').value;

    if (nombre.length == 0 || aficion.length == 0 || nombre[0] == " " || aficion[0] == " ") {
        //mandar un mensaje al usuario
        document.getElementById('mensaje').innerText = "Los campos no pueden ser vacios";
        document.getElementById('form').reset();

    }
    else {

        guardarDatos(nombre, aficion);
        document.getElementById('mensaje').innerText = "";
        document.getElementById('form').reset();

    }


})

function guardarDatos(pNombre, pAficion) {

    // let registro = new Object();
    // registro.nombre = pNombre;
    // registro.aficion = pAficion;

    let registro = {
        id: ultimoId,
        nombre: pNombre,
        aficion: pAficion
    }

    listaAficiones.push(registro);
    pintarAficion(registro);
    ultimoId++;

}


function pintarAficion(pObjeto) {
    var article = document.createElement('article');
    var h3 = document.createElement('h3');
    var textoInterior = document.createTextNode(`${pObjeto.nombre} : ${pObjeto.aficion}`);

    h3.appendChild(textoInterior);
    article.appendChild(h3);

    seccionAficiones.appendChild(article);

}