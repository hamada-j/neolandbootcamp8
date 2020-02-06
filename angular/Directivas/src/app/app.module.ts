import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    EpisodiosComponent,
    ListaPersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
