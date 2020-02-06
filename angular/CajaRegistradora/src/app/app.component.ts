import { Producto } from './models/producto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrComida: Producto[];
  arrBebida: Producto[];

  arrProductosSeleccionados: Producto[];

  constructor() {
    this.arrProductosSeleccionados = [];
    this.arrComida = [
      new Producto('Cocido Madrileño', 4.56, 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/cocido-madrileno-1080x671.jpg')
    ];
  }

  manejarProductoSeleccionado($event) {
    this.arrProductosSeleccionados.push($event);
  }
}
