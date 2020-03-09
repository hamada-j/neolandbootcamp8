import { UsuariosService } from './../usuarios.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;
  errores: any[];

  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
    this.errores = [];
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usuariosService.registro(this.formulario.value)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        this.errores = err.error;
      });
  }

}
