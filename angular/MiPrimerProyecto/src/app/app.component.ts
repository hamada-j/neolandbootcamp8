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

  constructor() {
    this.arrNums = [5, 8, 3];
    this.numero = 23;
    this.cad = 'Hola';
  }

}
