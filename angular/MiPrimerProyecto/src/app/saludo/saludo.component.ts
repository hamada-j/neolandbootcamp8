import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  // DEFINICIÓN PROPIEDADES
  mensaje: string;
  identificador: string;

  constructor() {
    // INICIALIZO PROPIEDADES
    this.mensaje = 'Este es el mensaje';
    this.identificador = 'identifParrafo';

    setTimeout(() => {
      this.mensaje = 'Otro mensaje diferente';
    }, 3000);
  }

  ngOnInit() {
  }

  devolverCadena() {
    return 'Cadena devuelta desde el método';
  }

  pulsarBoton($event) {
    console.log('Botón PULSADO!!!');
    this.mensaje = 'Texto desde el botón';
    console.log($event.target);
  }

}
