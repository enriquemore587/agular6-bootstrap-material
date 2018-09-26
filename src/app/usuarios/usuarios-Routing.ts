import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUsersComponent } from './components/main-users/main-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserListComponent } from './components/user-list/user-list.component';

const UserRoutingRoutes: Routes = [
    {
        path: 'usuarios-panel',
        component: MainUsersComponent,
        children: [
            { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },
            { path: 'create-user', component: CreateUserComponent },
            { path: 'user-list', component: UserListComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(UserRoutingRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule {

}