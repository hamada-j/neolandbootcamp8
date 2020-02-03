class Persona {

    constructor(pNombre, pColorPelo, pEdad) {
        this.nombre = pNombre;
        this.colorPelo = pColorPelo;
        this.edad = pEdad;
    }

    hablar() {
        return `Me llamo ${this.nombre} mi color de pelo es ${this.colorPelo} y tengo ${this.edad} años`;
    }

}

class Coche {

    constructor(pMarca, pModelo, pColor) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.color = pColor;
        this.velocidad = 0;
    }

    acelerar(pCambioVelocidad) {
        this.velocidad += pCambioVelocidad;
    }

    frenar(pCambioVelocidad) {
        this.velocidad -= pCambioVelocidad;
    }

    estado() {
        return `
Marca: ${this.marca} 
Modelo: ${this.modelo}
Color: ${this.color}
Velocidad: ${this.velocidad}`
    }
}

let persona = new Persona('Mario', 'Kaoba', 28);
let persona2 = new Persona('Rosa', 'Rubio', 19);

// console.log(persona2.hablar());

const coche1 = new Coche('Fiat', 'Tipo', 'blanco roto');
// console.log(coche1.estado());
coche1.acelerar(40);
// console.log(coche1.estado());
coche1.frenar(20);
// console.log(coche1.estado());

const coche2 = new Coche(coche1.marca, coche1.modelo, coche1.color);
// console.log(coche2.estado());
coche2.acelerar(30);
console.log(coche1.estado());
console.log(coche2.estado());

const personas = [persona, persona2];
const coches = [coche1, coche2]