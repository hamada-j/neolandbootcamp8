import { CAMBIA_MENSAJE } from './../actions';
import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.ngRedux.dispatch({
      type: CAMBIA_MENSAJE,
      msg: 'Mensaje enviado desde el componente principal'
    });
  }

}
