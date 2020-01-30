//es que hagais un app que me permita listar todos los personajes de starwars.

//https://swapi.co/api/

var ul = document.querySelector('#personajes');
var seccion = document.querySelector('#personaje');

hacerPeticion('https://swapi.co/api/people');

function hacerPeticion(pUrl) {

    let url = pUrl;
    let peticion = new XMLHttpRequest();

    peticion.open('GET', url, true);

    peticion.send();

    peticion.addEventListener('load', cargarContenido);

}

function cargarContenido(e) {

    if (e.target.readyState == 4 && e.target.status == 200) {
        var contenido = e.target.responseText;

        var objeto = JSON.parse(contenido);
        var listaPersonajes = objeto.results;
        console.log(listaPersonajes);

        pintarListaPersonajes(listaPersonajes);
    }
}


function pintarListaPersonajes(pLista) {

    for (personaje of pLista) {
        var li = document.createElement('li');
        li.dataset.url = personaje.url;
        var nombre = document.createTextNode(personaje.name);
        li.appendChild(nombre);
        ul.appendChild(li);

        li.addEventListener('click', capturarPersonaje)
    }
}

function capturarPersonaje(e) {
    var url = e.target.dataset.url;

    let pedido = new XMLHttpRequest();
    pedido.open('GET', url, true);
    pedido.send()

    pedido.addEventListener('load', recogerPersonaje);

}

function recogerPersonaje(e) {
    if (e.target.readyState == 4 && e.target.status == 200) {
        var contenido = e.target.responseText;
        var objeto = JSON.parse(contenido);

        pintarPersonaje(objeto);
    }
}


function pintarPersonaje(pObjeto) {

    seccion.innerHTML = `<article>
                <h2>${pObjeto.name}</h2>
                <ul>
                    <li>Nacimiento: ${pObjeto.birth_year}</li>
                </ul> 
        </article>`

}