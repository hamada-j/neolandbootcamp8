import { Persona } from './models/persona';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  arrPersonas: Persona[];

  constructor() {
    this.arrPersonas = [
      new Persona('Mario', 'Girón', 34),
      new Persona('Rocío', 'Durcal', 45),
      new Persona('Ramón', 'Lleida', 23),
      new Persona('Martina', 'Linares', 56)
    ];
  }

  getAll(): Persona[] {
    return this.arrPersonas;
  }


  getAllPromise(): Promise<Persona[]> {
    const prom = new Promise<Persona[]>((resolve, reject) => {
      resolve(this.arrPersonas);
    });
    return prom;
  }

  // getByEdad(pEdad: number): Persona[] {
  //   const resultado = [];
  //   // tslint:disable-next-line: prefer-for-of
  //   for (let i = 0; i < this.arrPersonas.length; i++) {
  //     if (this.arrPersonas[i].edad > pEdad) {
  //       resultado.push(this.arrPersonas[i]);
  //     }
  //   }
  //   return resultado;
  // }

  getByEdad(pEdad: number): Persona[] {
    return this.arrPersonas.filter(item => item.edad > pEdad);
  }

  getByEdadPromise(pEdad: number): Promise<Persona[]> {
    const prom = new Promise<Persona[]>((resolve, reject) => {
      const arrFiltrado = this.arrPersonas.filter(item => item.edad > pEdad);
      resolve(arrFiltrado);
    });
    return prom;
  }

  getByName(pName: string): Promise<Persona[]> {
    const prom = new Promise<Persona[]>((resolve, reject) => {
      const arrFiltrado = this.arrPersonas.filter(item => {
        const nombreCompleto = this.eliminarDiacriticos(this.eliminarEspacios(item.nombre + item.apellidos));
        const pNameNew = this.eliminarDiacriticos(this.eliminarEspacios(pName));

        return nombreCompleto.toLowerCase().includes(pNameNew.toLowerCase());
      });
      resolve(arrFiltrado);
    });
    return prom;
  }

  eliminarEspacios(pCadena: string): string {
    const regex = / /g;
    return pCadena.replace(regex, '');
  }

  eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }


}
