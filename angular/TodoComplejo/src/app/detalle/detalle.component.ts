import { Tarea } from './../models/tarea.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() tarea: Tarea;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCompleta() {
    this.tarea.completa = !this.tarea.completa;
  }

}
