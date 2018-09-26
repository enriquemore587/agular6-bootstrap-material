import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { ActualizarPasswordComponent } from './components/actualizar-password/actualizar-password.component';
import { SesionRoutingModule } from './sesion-Routing';
import { SourceMaterialModule } from '../material/app.material';
import { MainComponent } from './components/main-sesion/main-sesion.component';


@NgModule({
  imports: [
    CommonModule,
    SesionRoutingModule,
    SourceMaterialModule
  ],
  declarations: [InicioSesionComponent, RegistroComponent, RecuperarPasswordComponent, ActualizarPasswordComponent, MainComponent],
  exports: [InicioSesionComponent]
})
export class SesionModule { }
