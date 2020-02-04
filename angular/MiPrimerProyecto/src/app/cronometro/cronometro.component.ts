import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  contador: number;

  @Input() inicio: number;
  @Input() fin: string;

  constructor() {
    this.contador = 10;
  }

  ngOnInit() {
    this.contador = this.inicio || 10;
  }

  comenzarContador() {
    console.log(this.contador, this.fin);
    const interval = setInterval(() => {
      this.contador--;
      if (this.contador === parseInt(this.fin)) {
        clearInterval(interval);
      }
    }, 1000);
  }

}
