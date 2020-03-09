import { AlumnosService } from './../alumnos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  listaAlumnos: any[];

  constructor(
    private alumnosService: AlumnosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.alumnosService.getAll()
      .then(response => {
        console.log(response);
        this.listaAlumnos = response;
      })
      .catch(err => {
        console.log(err);
        this.router.navigate(['/login']);
        this.listaAlumnos = [];
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
