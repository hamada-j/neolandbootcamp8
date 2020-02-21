import { Imagen } from './../../models/galeria/imagen';
import { ImagenesService } from './../../services/galeria/imagenes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  listaImagenes: Imagen[];
  imagenActual: number;

  constructor(
    private imagenesService: ImagenesService
  ) {
    this.imagenActual = 0;
    this.listaImagenes = [];
  }

  async ngOnInit() {
    this.imagenesService.getAll()
      .then(imagenes => {
        console.log(imagenes);
        this.listaImagenes = imagenes;
      })

    // this.imagenesService.getAll()
    //   .then(this.extractTitulos)
    //   .then(this.titulosAMayus)
    //   .then(titulosMayus => console.log(titulosMayus))
    //   .catch(error => console.error('Errorcito'));

    // this.listaImagenes = await this.imagenesService.getAll();
  }

  cambiarSiguiente(next) {
    if (next) {
      this.imagenActual++;
    } else {
      this.imagenActual--;
    }
  }

  extractTitulos(arr) {
    return arr.map(item => item.titulo);
  }

  titulosAMayus(arr) {
    return arr.map(item => item.toUpperCase());
  }

}
