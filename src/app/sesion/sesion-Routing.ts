import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { ActualizarPasswordComponent } from './components/actualizar-password/actualizar-password.component';

import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { MainComponent } from './components/main-sesion/main-sesion.component';

const SesionRoutingRoutes: Routes = [
    {
        path: 'sesion-panel', 
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },
            { path: 'registry-user', component: RegistroComponent },
            { path: 'inicio-sesion', component: InicioSesionComponent },
            { path: 'actualziar-password', component: ActualizarPasswordComponent },
            { path: 'recuperar-password', component: RecuperarPasswordComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(SesionRoutingRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SesionRoutingModule {

}