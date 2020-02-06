export class Persona{

    nombre: string;
    apellidos: string;
    edad: number;
    direccion: string;

    constructor(pNombre: string, pApellidos: string, pEdad: number, pDireccion: string){
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
        this.direccion = pDireccion;
    }
    
}
