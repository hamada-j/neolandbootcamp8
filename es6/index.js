function sumaNum(num1, num2) {
    return num1 + num2;
}

console.log(sumaNum(3, 4));

var sumar = (num1, num2) => {
    return num1 + num2;
}

console.log(sumar(2, 3))

// DEFINICIÓN
const resultado = (res) => {
    console.log(res);
}
// EJECUCIÓN
resultado(5);

const sumaFn = (num1, num2, fn) => {
    const resultadoSuma = num1 + num2;
    fn(resultadoSuma);
}
sumaFn(3, 4, resultado);


function sumaDeVerdad(num1, num2) {
    return num1 + num2;
}

function manejarClick(event) {
    console.log(event.target);
}

const boton = document.getElementById('boton');
boton.addEventListener('click', ev => console.log('Hola Click'));

const sumaArr = (num1, num2) => num1 + num2;
const suma5 = num => num + 5;
