import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estilosParrafo: any;
  mostrar: boolean;

  constructor() {
    this.estilosParrafo = {
      color: 'indigo',
      fontSize: '24px'
    };
    this.mostrar = true;
  }

  manejarClick() {
    this.estilosParrafo.backgroundColor = 'salmon';
    this.mostrar = !this.mostrar;
  }

  modifyText($event) {
    this.estilosParrafo.fontSize = `${$event.target.value}px`;
  }

}
