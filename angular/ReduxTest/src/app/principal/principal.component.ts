import { CHANGE_MESSAGE } from './../actions';
import { IAppState } from './../store';
import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  cont: number;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    this.ngRedux.subscribe(() => {
      const state = this.ngRedux.getState();
      this.cont = state.contador;
    });
  }

  handleClick() {
    this.ngRedux.dispatch({
      type: CHANGE_MESSAGE,
      message: 'Mensaje enviado desde el componente principal'
    });
  }

}
