import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  manejarClick() {
    this.usuariosService.pedirPremio()
      .then(response => {
        console.log(response);
      })
  }

}
