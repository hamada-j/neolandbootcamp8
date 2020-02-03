class Profesor {
    constructor(pNombre, pApellidos, pExperiencia) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.experiencia = pExperiencia;
    }

    mostrarProfesor() {
        return `PROFESOR (nombre: ${this.nombre}, apellidos: ${this.apellidos}, experiencia:${this.experiencia})`;
    }
}

class Asignatura {
    constructor(pNombre, pProfesor) {
        this.nombre = pNombre;
        this.profesor = pProfesor;
    }
    mostrarAsignatura(muestraProfesor) {
        let resultado = `ASIGNATURA (nombre: ${this.nombre})`;
        if (muestraProfesor) {
            resultado += '\nAsignatura impartida por:';
            resultado += '\n' + this.profesor.mostrarProfesor();
        }
        return resultado;
    }
}

class Estudiante {
    constructor(pNombre, pApellidos) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.asignaturas = [];
    }
    agregarAsignatura(asignatura) {
        this.asignaturas.push(asignatura);
    }
    mostrarEstudiante() {
        let resultado = `ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellidos})`;
        for (let i = 0; i < this.asignaturas.length; i++) {
            resultado += this.asignaturas[i].mostrarAsignatura(true);
        }
        return resultado;
    }
}

class Universidad {
    constructor(pNombre) {
        this.nombre = pNombre;
        this.alumnos = [];
    }
    agregarAlumno(estudiante) {
        this.alumnos.push(estudiante);
    }
    mostrarUniversidad() {
        let resultado = `UNIVERSIDAD(nombre: ${this.nombre})`;
        for (const alumno of this.alumnos) {
            resultado += alumno.mostrarEstudiante();
        }
        return resultado;
    }

    obtenerAlumnosAsignatura(nombreAsignatura) {
        let cont = 0;
        for (const alumno of this.alumnos) {
            for (const asignatura of alumno.asignaturas) {
                if (asignatura.nombre === nombreAsignatura) cont++;
            }
        }
        return cont;
    }
}


let profesor1 = new Profesor('Ramón', 'García', 5);
let profesor2 = new Profesor('Rosa', 'Martinez', 9);
console.log(profesor1.mostrarProfesor());
console.log(profesor2.mostrarProfesor());