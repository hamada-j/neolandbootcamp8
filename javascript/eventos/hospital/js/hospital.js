
//funcion filtra por diagnostico, la funcion recibe una lista total y me devuelve una lista filtrada con los pacientes que tengan el diagnostico pasado por parametro.
function filtrarXdiagnostico(pListaPacientes, pDiagnostico) {


    var listaFiltrada = new Array();

    var contador = 0;
    for (paciente of pListaPacientes) {
        if (paciente.diagnostico.toLowerCase() == pDiagnostico.toLowerCase()) {

            listaFiltrada[contador] = paciente;
            contador++;
        }
    }

    return listaFiltrada;

}

//function que devuelva una lista de paciente que esten entre una edad minima y una edad maxima devolviendome una lista filtrada con lo que cumplan dicha condicion.

function filtrarXEdad(pListaPacientes, pEdadMinina, pEdadMaxima) {

    var listaFiltrada = new Array();

    for (paciente of pListaPacientes) {
        if (paciente.edad >= pEdadMinina && paciente.edad <= pEdadMaxima) {
            //para introducir elementos en la ultima posicion disponible de un array push
            listaFiltrada.push(paciente);
        }
    }

    return listaFiltrada;

}


//funcion de filtro de busqueda

function filtrarBusqueda(pListaPacientes, pPalabraBuscar) {

    var listaFiltrada = new Array();

    listaFiltrada = pListaPacientes.filter(paciente => {
        var nombrePaciente = paciente.nombre.toLowerCase();
        var apellidoPaciente = paciente.apellido.toLowerCase();

        return nombrePaciente.includes(pPalabraBuscar) || apellidoPaciente.includes(pPalabraBuscar);
    })


    return listaFiltrada;

}