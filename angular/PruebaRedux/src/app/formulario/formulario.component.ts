import { CAMBIA_DATOS_PERSONALES } from './../actions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IAppState } from '../store';
import { NgRedux } from '@angular-redux/store';

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

  onSubmit() {
    this.ngRedux.dispatch({
      type: CAMBIA_DATOS_PERSONALES,
      data: this.formulario.value
    })
  }

  ngOnInit(): void {
  }

}
