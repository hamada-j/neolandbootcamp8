import { LoginGuard } from './login.guard';
import { ReviewsComponent } from './reviews/reviews.component';
import { RelatedComponent } from './related/related.component';
import { ProductComponent } from './product/product.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'principal' },
  { path: 'principal', component: MainComponent },
  { path: 'info', component: InfoComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'about', component: AboutComponent, canActivate: [LoginGuard] },
  { path: 'usuario/:usuarioId', component: UsuarioComponent, canActivate: [LoginGuard] },
  {
    path: 'producto/:productoId', component: ProductComponent, children: [
      { path: 'related', component: RelatedComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: '**', redirectTo: 'principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
