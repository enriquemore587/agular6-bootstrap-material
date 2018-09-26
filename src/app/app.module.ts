import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routing, appToutingProviders } from './app.routing';


import { AppComponent } from './app.component';


import { SourceMaterialModule } from './material/app.material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SesionModule } from './sesion/sesion.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    SourceMaterialModule,
    SesionModule,
    UsuariosModule
  ],
  exports: [SourceMaterialModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, appToutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
