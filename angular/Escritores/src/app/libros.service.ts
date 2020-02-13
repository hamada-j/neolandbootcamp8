import { LIBROS } from './db/libros.db';
import { Libro } from './models/libro.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByEscritorId(pEscritorId: number): Promise<Libro[]> {
    return new Promise((resolve, reject) => {
      resolve(LIBROS.filter(item => item.escritor === pEscritorId));
    });
  }

}
