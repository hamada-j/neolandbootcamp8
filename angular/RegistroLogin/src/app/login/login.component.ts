import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  onSubmit(formValues) {
    this.usuariosService.login(formValues)
      .then(response => {
        console.log(response);
      })
  }

}
