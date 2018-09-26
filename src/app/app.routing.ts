import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';


const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: StartComponent }
];

export const appToutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
