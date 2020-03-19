import { INCREMENTA_CONTADOR, DECREMENTA_CONTADOR } from './../actions';
import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  msg: string;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    this.ngRedux.subscribe(() => {
      const state = this.ngRedux.getState();
      this.msg = state.mensaje;
    });
  }

  handleClick(incrementar) {
    if (incrementar) {
      this.ngRedux.dispatch({ type: INCREMENTA_CONTADOR })
    } else {
      this.ngRedux.dispatch({ type: DECREMENTA_CONTADOR })
    }
  }

}
