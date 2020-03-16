import { IAppState } from './../store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { CHANGE_DATOS_PERSONALES } from '../actions';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      edad: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ngRedux.dispatch({
      type: CHANGE_DATOS_PERSONALES,
      data: this.formulario.value
    })
  }

}
