import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() num1: string;
  @Input() num2: string;

  resultado: number;

  constructor() {
    this.resultado = 0;
  }

  ngOnInit() {
  }

  calcularResultado() {
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }

}
