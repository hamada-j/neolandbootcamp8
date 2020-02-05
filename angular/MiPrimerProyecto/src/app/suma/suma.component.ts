import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() num1: string;
  @Input() num2: string;

  @Output() resuelveSuma: EventEmitter<number>;

  resultado: number;

  constructor() {
    this.resultado = 0;
    this.resuelveSuma = new EventEmitter();
  }

  ngOnInit() {
  }

  calcularResultado() {
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
    this.resuelveSuma.emit(this.resultado);
  }

}
