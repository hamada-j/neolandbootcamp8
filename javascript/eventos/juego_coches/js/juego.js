/// quiero poder manejar el coche1 con el teclado,

//la aceleracion va ser constante ej: 10px - tecla que acelerar el espacio
// oxido nitroso - tecla N cada vez que demos a esa tecla aumentaremos el avance a 40px. Condicion solo puedo usarlo tres veces.
//cuando llegemos a la meta tenemos que lanzar un mensaje de ha ganado coche1


var coche1 = document.querySelector('#coche1');
var coche2 = document.querySelector('#coche2');
var coche3 = document.querySelector('#coche3');
var mensaje = document.getElementById('mensaje');
var avanceCoche1 = 0;
var avanceCoche2 = 0;
var avanceCoche3 = 0;
var nitro = 3;

document.addEventListener('keydown', capturaTeclas);

function capturaTeclas(e) {
    var tecla = e.keyCode;

    switch (tecla) {
        case 32:
            //movercoche1
            moverCoche1(10);
            break;

        case 78:
            //oxido nitroso
            if (nitro > 0) {
                moverCoche1(40);
                nitro--;
            }

            break;
    }
}

function moverCoche1(pDistancia) {
    avanceCoche1 += pDistancia // avanceCoche1 = avanceCoche1 + pDistancia

    coche1.style.marginLeft = avanceCoche1 + "px";
    if (avanceCoche1 >= 670) {
        pararJuego();
        mensaje.innerText = "Ha ganado puto amo";
    }

}


//coche2 se mueve de forma autonoma 20px cada vez y tiene que realizar lo mismo que el coche1, cuando llegue a meta mensaje, no tiene oxido nitroso.

var int2 = setInterval(moverCoche2, 100);

function moverCoche2() {
    avanceCoche2 += 20 // avanceCoche1 = avanceCoche1 + pDistancia

    coche2.style.marginLeft = avanceCoche2 + "px";
    if (avanceCoche2 >= 670) {
        pararJuego();
        mensaje.innerText = "Ha ganado el coche 2";
    }
}

//coche3 se mueve tambien de forma autonoma pero aleatoria


var int3 = setInterval(moverCoche3, 100);

function moverCoche3() {
    avanceCoche3 += Math.random() * 40;

    coche3.style.marginLeft = avanceCoche3 + "px";
    if (avanceCoche3 >= 670) {
        pararJuego();
        mensaje.innerText = "Ha ganado coche 3";
    }
}

function pararJuego() {
    clearInterval(int2);
    clearInterval(int3);

    document.removeEventListener('keydown', capturaTeclas);

}

