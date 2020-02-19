import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css'],
  animations: [
    trigger('cambiaColor', [
      state('rojo', style({
        backgroundColor: 'red'
      })),
      state('verde', style({
        backgroundColor: 'green',
        transform: 'scale(1.5) translateY(300px)'
      })),
      state('amarillo', style({
        backgroundColor: 'yellow',
        transform: 'translateX(400px)',
        opacity: 0.3
      })),
      transition('rojo => amarillo', animate(500)),
      transition('amarillo => verde', animate('1s ease-in')),
      transition('verde => rojo', animate(200)),
      transition('void => *', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate(1000)
      ])
    ])
  ]
})
export class SemaforoComponent implements OnInit {

  color: string;

  constructor() {
    this.color = 'amarillo';
  }

  ngOnInit() {
    setInterval(() => {
      if (this.color === 'rojo') {
        this.color = 'amarillo';
      } else if (this.color === 'amarillo') {
        this.color = 'verde';
      } else if (this.color === 'verde') {
        this.color = 'rojo';
      }
    }, 2000);
  }

}
