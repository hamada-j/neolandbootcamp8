import { AlumnosService } from './../alumnos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  listaAlumnos: any[];

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.alumnosService.getAll()
      .then(response => {
        this.listaAlumnos = response;
      })
      .catch(err => {
        console.log(err);
      });
  }

  manejarClick(student) {
    this.alumnosService.delete(student.id)
      .then(async response => {
        console.log(response);
        this.listaAlumnos = await this.alumnosService.getAll();
      })
      .catch(err => {
        console.log(err);
      })
  }

}
