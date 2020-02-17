import { ListaPlanetasComponent } from './lista-planetas/lista-planetas.component';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'personas', component: ListaComponent },
  { path: 'planetas', component: ListaPlanetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
