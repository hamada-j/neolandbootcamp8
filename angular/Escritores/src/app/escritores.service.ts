import { ESCRITORES } from './db/escritores.db';
import { Injectable } from '@angular/core';
import { Escritor } from './models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  /*
    Método que devuelve una promesa con todo el array de Escritores
  */
  getAll(): Promise<Escritor[]> {
    return new Promise<Escritor[]>((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  /*
    Método que devuelve una promesa con el array de escritores filtrado por paises.
    Se utiliza el método filter para su resolución.
  */
  getByPais(pPais: string): Promise<Escritor[]> {
    return new Promise<Escritor[]>((resolve, reject) => {
      if (pPais === 'todos') {
        resolve(ESCRITORES);
      } else {
        resolve(ESCRITORES.filter(item => item.pais === pPais));
      }
    });
  }

  /*
    Método que devuelve una promesa con el array de escritores filtrado por paises.
    Se utiliza un bucle FOR con un IF.
  */
  getByPaisV2(pPais: string): Promise<Escritor[]> {
    return new Promise<Escritor[]>((resolve, reject) => {
      const arr = [];
      for (const escritor of ESCRITORES) {
        if (escritor.pais === pPais) {
          arr.push(escritor);
        }
      }
      resolve(arr);
    });
  }

  /*
    Método que devuelve una promesa con un escritor buscado a partir de su ID
    Se utiliza el método find para su resolución.
  */
  getById(pId: number): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES.find(item => item.id === pId));
    });
  }

  /*
    Método que devuelve una promesa con un escritor buscado a partir de su ID
    Se utiliza un FOR y un IF
  */
  getByIdV2(pId: number): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      for (const escritor of ESCRITORES) {
        if (escritor.id === pId) {
          return escritor;
        }
      }
    });
  }

}
