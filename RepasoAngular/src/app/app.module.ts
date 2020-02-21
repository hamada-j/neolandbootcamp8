import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { SliderComponent } from './galeria/slider/slider.component';
import { FormularioComponent } from './galeria/formulario/formulario.component';
import { AdminComponent } from './galeria/admin/admin.component';
import { DetalleImagenComponent } from './galeria/detalle-imagen/detalle-imagen.component';
import { AutorComponent } from './galeria/autor/autor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    SliderComponent,
    FormularioComponent,
    AdminComponent,
    DetalleImagenComponent,
    AutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
