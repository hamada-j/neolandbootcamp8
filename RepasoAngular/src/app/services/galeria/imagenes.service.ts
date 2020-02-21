import { Injectable } from '@angular/core';
import { Imagen } from 'src/app/models/galeria/imagen';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  private arrImagenes: Imagen[];

  private imagenesSb: Subject<Imagen[]>;

  constructor() {
    if (localStorage.getItem('imagenesLS')) {
      console.log('CARGA DE LS');
      this.arrImagenes = JSON.parse(localStorage.getItem('imagenesLS'));
      console.log(this.arrImagenes)
    } else {
      console.log('CARGA DE Servicio');
      this.arrImagenes = [];
    }

    this.imagenesSb = new Subject();
  }

  getAll(): Promise<Imagen[]> {
    return new Promise<Imagen[]>((resolve, reject) => {
      setTimeout(() => resolve(this.arrImagenes), 500);
    });
  }

  addImagen(pImagen: Imagen): Promise<Imagen[]> {
    return new Promise((resolve, reject) => {
      this.arrImagenes.push(pImagen);
      this.imagenesSb.next(this.arrImagenes);
      localStorage.setItem('imagenesLS', JSON.stringify(this.arrImagenes));
      resolve(this.arrImagenes);
    });
  }

  imagenesObs(): Observable<Imagen[]> {
    return this.imagenesSb.asObservable();
  }

}
