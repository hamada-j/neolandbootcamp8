import { AlumnosService } from './../alumnos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      const response = await this.alumnosService.getById(params.alumnoId);
      console.log(response);
    });
  }

}
