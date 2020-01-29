// funcion de abertura y cierre del menu

var btnOcultar = document.getElementById('btnOcultar');
var sidebar = document.getElementById('sidebar');
var content = document.getElementById('content');
var seccionPacientes = document.getElementById('listapacientes');

btnOcultar.addEventListener('click', function (e) {
    e.preventDefault();
    //console.log(e.target)
    sidebar.className = (sidebar.className == "") ? "active" : "";
    content.className = (content.className == "") ? "active" : "";
    e.target.innerText = (e.target.innerText == "Cerrar") ? "Mostrar" : "Cerrar";

    // content.classList.add('active');
    // content.classList.remove()
    // content.classList.toogle()
    // content.classList.contains()
    // content.classList.replace()
})


// fin


//filtro de diagnostico
var selectorDiagnostico = document.querySelector('#diagnostico');

selectorDiagnostico.addEventListener('change', recogeDiagnostico);

function recogeDiagnostico(e) {
    //e.target.value me devuelve el diagnostico seleccionado cada vez que cambio el selector.
    let diagnostico = e.target.value;


    if (diagnostico != "") {
        let listaFiltradaDiagnostico = filtrarXdiagnostico(listaPacientes, diagnostico);
        pintarPacientes(listaFiltradaDiagnostico);
    } else {
        pintarPacientes(listaPacientes);
    }



}


//fin

//funcion de pintado de cualquier lista de tipo paciente.

function pintarPacientes(pListaPacientes) {
    seccionPacientes.innerHTML = "";

    if (pListaPacientes.length != 0) {
        pListaPacientes.forEach(paciente => {
            seccionPacientes.innerHTML += `<article class="card p-3">
                    <div class="row ">
                        <div class="col-md-8 ">
                            <div class="card-block">
                                <h4 class="card-title">${paciente.nombre} ${paciente.apellido}</h4>
                                <ul>
                                    <li>Diagnostico: <strong>${paciente.diagnostico}</strong></li>
                                    <li>Edad: <strong>${paciente.edad}</strong></li>
                                    <li>Numero de la seguridad social: <strong>${paciente.numeroSS}</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article> 
                <div class="line"></div>`
        })
    } else {
        seccionPacientes.innerHTML = "<h2>No hay registros con esas condiciones</h2>"
    }

}

pintarPacientes(listaPacientes);

//funcion filtrar por edad minima y maxima

var btnSelectorEdad = document.querySelector('#btn');

btnSelectorEdad.addEventListener('click', recogerDatosEdad);

function recogerDatosEdad(e) {

    let datoEdadMinima = (document.querySelector('#edadminima').value == "") ? 0 : parseInt(document.querySelector('#edadminima').value);


    let datoEdadMaxima = (document.querySelector('#edadmaxima').value == "") ? 100 : parseInt(document.querySelector('#edadmaxima').value);

    if (datoEdadMinima > datoEdadMaxima) {
        alert('La edad minima no puede ser mayor que la maxima')
    }
    else {
        let listaFiltradaEdad = filtrarXEdad(listaPacientes, datoEdadMinima, datoEdadMaxima);
        pintarPacientes(listaFiltradaEdad);
    }

}


//funcion de busqueda 

var busqueda = document.querySelector('#search');
busqueda.addEventListener('keyup', recogerBusqueda);

function recogerBusqueda(e) {
    let palabraBuscar = e.target.value;

    var listaBusqueda = filtrarBusqueda(listaPacientes, palabraBuscar);

    pintarPacientes(listaBusqueda);
}


//funcion filtro combinado // superfiltro

var btnFiltroCombinado = document.getElementById('btnCombinado');

btnFiltroCombinado.addEventListener('click', recogerDatosCombinado);


function recogerDatosCombinado(e) {
    let edadMinima = parseInt(document.getElementById('combinadoMinima').value);
    let edadMaxima = parseInt(document.getElementById('combinadoMaxima').value);
    let diagnostico = document.getElementById('combinadoDiagnostico').value;

    let listaEdad = filtrarXEdad(listaPacientes, edadMinima, edadMaxima);
    let listaCombinada = filtrarXdiagnostico(listaEdad, diagnostico);
    pintarPacientes(listaCombinada);


}