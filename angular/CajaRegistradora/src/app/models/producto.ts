export class Producto {
    nombre: string;
    precio: number;
    imagen: string;

    constructor(pNombre: string, pPrecio: number, pImagen: string) {
        this.nombre = pNombre;
        this.precio = pPrecio;
        this.imagen = pImagen;
    }
}
