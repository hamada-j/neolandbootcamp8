import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  formularioEnviado: boolean;

  constructor() {
    this.formularioEnviado = false;
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      password: new FormControl('', [
        Validators.pattern(/^(?=.*\d).{4,8}$/)
      ]),
      repite_password: new FormControl()
    }, [this.passwordValidator]);
  }

  ngOnInit(): void {
    const controlEmail = this.formulario.controls.email;
    controlEmail.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log(value);
    });
  }

  onSubmit() {
    this.formularioEnviado = true;
    console.log(this.formulario.value);
  }

  edadValidator(control) {
    const edadValue = control.value;
    const maxValue = 65;
    const minValue = 18;

    if (edadValue >= minValue && edadValue <= maxValue) {
      // Validado OK
      return null;
    } else {
      return { edadvalidator: { max: maxValue, min: minValue } };
    }
  }

  dniValidator(control) {

    const dni = control.value;

    const expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) === true) {
      let numero = dni.substring(0, dni.length - 1);
      let letr = dni.charAt(dni.length - 1);
      numero = numero % 23;
      let letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
      letra = letra.substring(numero, numero + 1);
      if (letra !== letr.toUpperCase()) {
        return { dnivalidator: { msg: 'La letra es incorrecta' } };
      } else {
        return null;
      }
    } else {
      return { dnivalidator: { msg: 'El formato no es válido' } };
    }
  }

  passwordValidator(form) {
    const passwordValue = form.controls.password.value;
    const repitePasswordValue = form.controls.repite_password.value;

    if (passwordValue === repitePasswordValue) {
      return null;
    } else {
      return { passwordvalidator: true };
    }
  }

}
