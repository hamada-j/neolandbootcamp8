const arrNums = [1, 2, 3, 4, 5, 6, 7];
const nuevoArr = [3, ...arrNums];
console.log(nuevoArr);

const producto = {
    nombre: 'Minipimer',
    departamento: 'Electrodomesticos',
    precio: 39.99
};
const newProducto = {
    id: 123,
    ...producto
}
console.log(newProducto);

const { id, precio, ...demas } = newProducto;
console.log(id);
console.log(precio);
console.log(demas);

function sumar(...nums) {
    let resultado = 0;
    for (let num of nums) {
        resultado += num;
    }
    return resultado;
}
console.log(sumar(3, 4));
console.log(sumar(4, 5, 76, 32, 3));
