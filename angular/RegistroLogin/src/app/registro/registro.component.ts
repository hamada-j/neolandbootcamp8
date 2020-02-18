import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      password_repeat: new FormControl(''),
      mail: new FormControl(''),
      address: new FormControl(''),
      age: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usuariosService.registro(this.formulario.value)
      .then(response => {
        console.log(response);
      });
  }

}
