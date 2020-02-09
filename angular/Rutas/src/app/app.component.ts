import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  manejarClick(ruta) {
    // Hacer más acciones
    // gestionar formulario
    // lanzar petición al servidor
    // bucle 1000000 iteraciones
    this.router.navigate([ruta]);
  }
}
