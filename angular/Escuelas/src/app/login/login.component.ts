import { UsuariosService } from './../usuarios.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usuariosService.login(this.formulario.value)
      .then(response => {
        console.log(response['success']);
        localStorage.setItem('token', response['success']);
        localStorage.setItem('token_since', new Date().toString());
      })
      .catch(err => {
        console.log(err);
      })
  }

}
