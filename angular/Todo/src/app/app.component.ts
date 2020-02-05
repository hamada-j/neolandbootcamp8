import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: any[];

  constructor() {
    this.arrTareas = [];
  }

  manejarTareaEnviada($event) {
    const nuevaTarea = { ...$event };
    this.arrTareas.push(nuevaTarea);
  }

}
