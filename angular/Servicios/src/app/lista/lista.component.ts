import { Persona } from './../models/persona';
import { PersonasService } from './../personas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaPersonas: Array<Persona>;

  constructor(private personasService: PersonasService) { }

  async ngOnInit() {
    // this.listaPersonas = this.personasService.getAll();
    // console.log(this.listaPersonas);

    // this.personasService.getAllPromise()
    //   .then(pListaPersonas => {
    //     this.listaPersonas = pListaPersonas;
    //   }).catch(err => console.log(err));

    this.personasService.getByName('arti')
      .then(arrPersonas => {
        console.log(arrPersonas);
      });

    this.listaPersonas = await this.personasService.getAllPromise();
  }

  async manejarClick() {
    // this.listaPersonas = this.personasService.getByEdad(30);

    this.listaPersonas = await this.personasService.getByEdadPromise(40);
  }

  manejarCampoTexto($event) {
    this.personasService.getByName($event.target.value)
      .then(arrPersonas => {
        this.listaPersonas = arrPersonas;
      });
  }

}
