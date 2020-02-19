import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  precio: number;
  fechaActual: Date;
  numero: number;
  numAleatorio: number;
  arrNumeros: number[];

  inicio: number;
  fin: number;

  promesaUsers: Promise<any[]>;

  constructor(private httpClient: HttpClient) {
    this.precio = 1345.98823;
    this.fechaActual = new Date();
    this.numero = 1232789.929787198;
    this.numAleatorio = Math.random();
    this.arrNumeros = [23, 54, 12, 2, 122, 9, 87, 45];
    this.inicio = 3;
    this.fin = 5;
  }

  ngOnInit() {
    setInterval(() => {
      this.fechaActual = new Date();
    }, 1000);
    this.promesaUsers = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').toPromise();
  }

  manejarChangeInicio($event) {
    this.inicio = $event.target.value;
  }

  manejarChangeFin($event) {
    this.fin = $event.target.value;
  }

}
