import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrNums: number[];

  numero: number;
  cad: string;
  campoTexto: string;

  constructor() {
    this.arrNums = [5, 8, 3];
    this.numero = 23;
    this.cad = 'Hola';
    this.campoTexto = 'Valor por defecto';
    setTimeout(() => this.campoTexto = 'Valor después de 2 seg', 2000);
  }

  manejarTerminaContador($event) {
    console.log($event);
  }

  manejarResuelveSuma($event) {
    console.log(`El resultado de la suma es ${$event}`);
  }

}
