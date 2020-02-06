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
      new Persona('Mario', 'Giron', 34, 'Gran Via 32'),
      new Persona('Rosa', 'García', 45, 'Leganitos 45'),
      new Persona('Manuel', 'Martínez', 23, 'Barco 27'),
      new Persona('Rocío', 'Jurado', 87, 'Palma 23')
    ];
  }

  ngOnInit() {
  }

}
