import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';
import { FormAlumnosComponent } from './form-alumnos/form-alumnos.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'alumnos', component: ListaAlumnosComponent, canActivate: [LoginGuard] },
  { path: 'alumnos/:alumnoId', component: DetalleAlumnoComponent },
  { path: 'new', component: FormAlumnosComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
