import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string;

  constructor() { }

  ngOnInit() {
  }

  pulsarTecla(tecla) {
    this.resultado += tecla;
  }

  resolver() {
    this.resultado = eval(this.resultado);
  }
}
