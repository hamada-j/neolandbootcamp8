export class Imagen {

    titulo: string;
    descripcion: string;
    url: string;
    activa: boolean;

    constructor(pTitulo: string, pDescripcion: string, pUrl: string) {
        this.titulo = pTitulo;
        this.descripcion = pDescripcion;
        this.url = pUrl;
        this.activa = false;
    }

}
