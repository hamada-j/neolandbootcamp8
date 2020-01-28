var botones = document.querySelectorAll('#menu li a');

for (boton of botones) {
    boton.addEventListener('click', capturarBoton);
}

function capturarBoton(event) {
    event.preventDefault();

    let seccion = event.target.innerText.toLowerCase();

    var secciones = document.querySelectorAll('.contenedor section');
    //primero pongo todas a none

    secciones.forEach(elemento => elemento.style.display = "none");

    //la que toco a block
    document.getElementById(seccion).style.display = "block";


}