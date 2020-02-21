import { ImagenesService } from './services/galeria/imagenes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numImagenes: number;

  constructor(private imagenesService: ImagenesService) {
    this.numImagenes = 0;
  }

  ngOnInit() {
    this.imagenesService.imagenesObs().subscribe(imgs => {
      this.numImagenes = imgs.length;
    });
  }

}
