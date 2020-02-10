export class Tarea {
    titulo: string;
    texto: string;
    completa: boolean;
    constructor(pTitulo: string, pTexto: string) {
        this.titulo = pTitulo;
        this.texto = pTexto;
        this.completa = false;
    }
}
