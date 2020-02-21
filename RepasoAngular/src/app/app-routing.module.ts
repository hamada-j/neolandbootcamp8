import { AutorComponent } from './galeria/autor/autor.component';
import { DetalleImagenComponent } from './galeria/detalle-imagen/detalle-imagen.component';
import { AdminComponent } from './galeria/admin/admin.component';
import { FormularioComponent } from './galeria/formulario/formulario.component';
import { SliderComponent } from './galeria/slider/slider.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'listapersonas', component: ListaPersonasComponent },
  { path: 'galeria/slider', component: SliderComponent },
  { path: 'galeria/new', component: FormularioComponent },
  { path: 'galeria/admin', component: AdminComponent },
  {
    path: 'galeria/imagen/:idImagen', component: DetalleImagenComponent, children: [
      { path: 'autor', component: AutorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
