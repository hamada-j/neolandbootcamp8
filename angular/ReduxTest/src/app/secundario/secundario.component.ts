import { CHANGE_MESSAGE } from './../actions';
import { IAppState } from './../store';
import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.ngRedux.dispatch({
      type: CHANGE_MESSAGE,
      message: 'Mensaje desde el componente secundario'
    });
  }

}
