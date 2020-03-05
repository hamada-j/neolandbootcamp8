import { AlumnosService } from './../alumnos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.css']
})
export class FormAlumnosComponent implements OnInit {

  formulario: FormGroup;

  constructor(private alumnosService: AlumnosService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      edad: new FormControl(''),
      email: new FormControl(''),
      matricula: new FormControl('')
    });
  }

  onSubmit() {
    this.alumnosService.create(this.formulario.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/alumnos']);
      })
      .catch(err => {
        console.log(err);
      })
  }

  ngOnInit(): void {
  }

}
