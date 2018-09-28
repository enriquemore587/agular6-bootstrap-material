import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoMainComponent } from './components/catalogo-main/catalogo-main.component';
import { CivilStatusComponent } from './components/civil-status/civil-status.component';
import { MeetingCategoryComponent } from './components/meeting-category/meeting-category.component';
import { TypeMeetingsComponent } from './components/type-meetings/type-meetings.component';
import { ConsultingRoomsComponent } from './components/consulting-rooms/consulting-rooms.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TypeUserComponent } from './components/type-user/type-user.component';

const CatologosRoutingRoutes: Routes = [
    {
        path: 'catalogos-panel',
        component: CatalogoMainComponent,
        children: [
            { path: '', redirectTo: 'civil-status', pathMatch: 'full' },
            { path: 'civil-status', component: CivilStatusComponent },
            { path: 'meeting-category', component: MeetingCategoryComponent },
            { path: 'type-meetings', component: TypeMeetingsComponent },
            { path: 'consulting-rooms', component: ConsultingRoomsComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'type-user', component: TypeUserComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(CatologosRoutingRoutes)
    ],
    exports: [ 
        RouterModule
    ]
})
export class CatologosRoutingModule {

}