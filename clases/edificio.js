// Clase Persona, Vivienda, Edificio
// Persona - nombre, apellidos, edad, mostrar()
// Vivienda - piso, letra, mostrar()
// Edificio - calle, numero, mostrar()

class Persona {
    constructor(pNombre, pApellidos, pEdad) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
    }

    mostrar() {
        return `Nombre: ${this.nombre}. Apellidos: ${this.apellidos}. Edad: ${this.edad}`;
    }
}

class Vivienda {
    constructor(pPiso, pLetra) {
        this.piso = pPiso;
        this.letra = pLetra;
        this.habitantes = [];
    }

    agregarHabitante(pPersona) {
        this.habitantes.push(pPersona);
    }

    mostrar() {
        let resultado = `Piso: ${this.piso}. Letra: ${this.letra}`;
        for (const habitante of this.habitantes) {
            resultado += '\n' + habitante.mostrar();
        }
        return resultado;
    }
}

class Edificio {
    constructor(pCalle, pNumero) {
        this.calle = pCalle;
        this.numero = pNumero;
        this.casas = [];
    }

    agregarCasa(pCasa) {
        this.casas.push(pCasa);
    }

    mostrar() {
        let resultado = `Calle: ${this.calle}. Numero: ${this.numero}.`;
        for (const casa of this.casas) {
            resultado += '\n' + casa.mostrar();
        }
        return resultado;
    }
}

const pers1 = new Persona('Rosalía', 'Martín', 28);
const pers2 = new Persona('Rodrigo', 'García', 46);

const viv1 = new Vivienda(1, 'B');
viv1.agregarHabitante(pers1);
viv1.agregarHabitante(pers2);

const viv2 = new Vivienda(2, 'A');

const edif1 = new Edificio('Gran Via', 32);

edif1.agregarCasa(viv1);
edif1.agregarCasa(viv2);

console.log(edif1.mostrar());

