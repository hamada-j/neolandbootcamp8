let cadena: string = 'Hola';
let num: number = 45;
let cond: boolean = true;

let arr: any[] = [1, "hola", true];
let arr2: Array<any> = [1, "adios", false];

let numeros: number[] = [1, 2, 3, 4];
let numeros2: Array<number> = [3, 1, 2, 4];

let suma = (num1: number, num2: number): number => {
    return num1 + num2;
}
let res: number = suma(3, 5);

let json: any = {
    nombre: 'Mario'
}

function muestraMensaje(msg: string): void {
    console.log(msg);
}

muestraMensaje('Hola Mundo TS!');