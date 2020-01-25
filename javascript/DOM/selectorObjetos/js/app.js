//me gustaria por favor kate si no es molestia que la imagen cambiase por otra cada vez que ejecute algo por consola.

function cambiarImagen(pNumeroImagen) {
    var contenedor = document.getElementsByTagName('div');
    var img = contenedor[0].getElementsByTagName('img');
    img[0].src = 'images/imagen_' + pNumeroImagen + '.jpg';
}

//numero aleatorio entre 0 y 3 pongo el cuatro para llegar hasta el tres

//var numeroAleatorio = Math.floor(Math.random() * 3) + 1;

//console.log(numeroAleatorio);

//cambiarImagen(numeroAleatorio);

//hacer intervalos.

// setTimeout(function () {
//     cambiarImagen(numeroAleatorio)
// }, 3000); //funcion de espera tarde 3 segundos en lanzar el callback



let intervalo = setInterval(function () {
    var numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    cambiarImagen(numeroAleatorio)
}, 3000)


clearInterval(intervalo);