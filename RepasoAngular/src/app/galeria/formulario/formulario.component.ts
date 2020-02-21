import { ImagenesService } from './../../services/galeria/imagenes.service';
import { Imagen } from 'src/app/models/galeria/imagen';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private imagenesService: ImagenesService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      descripcion: new FormControl(''),
      url: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const nuevaImagen = new Imagen(this.formulario.value.titulo, this.formulario.value.descripcion, this.formulario.value.url);
    this.imagenesService.addImagen(nuevaImagen)
      .then(imagenes => {
        alert('Imagen Insertada');
        this.router.navigate(['/galeria', 'slider']);
      });
  }

}
