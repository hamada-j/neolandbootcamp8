import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PrincipalComponent } from './principal/principal.component';
import { SecundarioComponent } from './secundario/secundario.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PrincipalComponent,
    SecundarioComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
