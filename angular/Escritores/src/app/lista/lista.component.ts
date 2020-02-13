import { Escritor } from './../models/escritor.model';
import { EscritoresService } from './../escritores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  arrEscritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  async ngOnInit() {
    // Recupero todos los Escritores cuando se inicia el componente
    this.arrEscritores = await this.escritoresService.getAll();
  }

  async manejarChange($event) {
    // El método se lanza cuando cambiamos el select
    // Se encarga de recuperar los escritores filtrados por país
    this.arrEscritores = await this.escritoresService.getByPais($event.target.value);
  }

}
