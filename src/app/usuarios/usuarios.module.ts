import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MainUsersComponent } from './components/main-users/main-users.component';
import { UserRoutingModule } from './usuarios-Routing';
import { SourceMaterialModule } from '../material/app.material';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SourceMaterialModule,
    HttpClientModule
  ],
  declarations: [CreateUserComponent, UserListComponent, MainUsersComponent, HeaderComponent]
})
export class UsuariosModule { }
