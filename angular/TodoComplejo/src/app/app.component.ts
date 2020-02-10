import { Tarea } from './models/tarea.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: Tarea[];

  constructor() {
    this.arrTareas = [];
  }

  manejarTareaEnviada($event) {
    this.arrTareas.push({ ...$event });
  }

}
