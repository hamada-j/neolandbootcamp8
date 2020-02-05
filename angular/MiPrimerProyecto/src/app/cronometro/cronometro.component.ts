import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  contador: number;

  @Input() inicio: number;
  @Input() fin: string;

  @Output() terminaContador: EventEmitter<string>;

  constructor() {
    this.contador = 10;
    this.terminaContador = new EventEmitter();
  }

  ngOnInit() {
    this.contador = this.inicio || 10;
  }

  comenzarContador() {
    console.log(this.contador, this.fin);
    const interval = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(interval);
        this.terminaContador.emit('Termina el cronómetro');
      }
    }, 1000);
  }

}
