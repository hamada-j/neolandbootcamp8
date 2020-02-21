import { Persona } from './../models/persona';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  arrPersonas: Persona[];

  constructor() {
    this.arrPersonas = [
      { id: 1, nombre: 'Mario', apellidos: 'Girón', edad: 32 },
      { id: 2, nombre: 'Rocío', apellidos: 'Girón', edad: 32 },
      { id: 3, nombre: 'María', apellidos: 'Girón', edad: 32 },
      { id: 4, nombre: 'Antonio', apellidos: 'Girón', edad: 32 },
      { id: 5, nombre: 'Rodrigo', apellidos: 'Girón', edad: 32 },
    ]
  }

  ngOnInit(): void {
  }

  manejarClick() {
    this.arrPersonas.push({ id: 6, nombre: 'Manuel', apellidos: 'Martínez', edad: 36 });
  }

  // Función que devuelve el identificador único para cada uno de los elementos de la iteración con el ngFor
  trackPersona(index, persona) {
    return persona.id;
  }

}
