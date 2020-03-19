import { CAMBIA_MENSAJE } from './../actions';
import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent implements OnInit {

  count: number;

  constructor(private ngredux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    this.ngredux.subscribe(() => {
      const state = this.ngredux.getState();
      this.count = state.contador;
    });
  }

  handleClick() {
    this.ngredux.dispatch({
      type: CAMBIA_MENSAJE,
      msg: 'Mensaje enviado desde Secundario'
    });
  }

}
