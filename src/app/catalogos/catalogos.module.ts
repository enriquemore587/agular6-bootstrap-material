import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoMainComponent } from './components/catalogo-main/catalogo-main.component';
import { CivilStatusComponent } from './components/civil-status/civil-status.component';
import { MeetingCategoryComponent } from './components/meeting-category/meeting-category.component';
import { TypeMeetingsComponent } from './components/type-meetings/type-meetings.component';
import { ConsultingRoomsComponent } from './components/consulting-rooms/consulting-rooms.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TypeUserComponent } from './components/type-user/type-user.component';
import { SourceMaterialModule } from '../material/app.material';
import { HttpClientModule } from '@angular/common/http';
import { CatologosRoutingModule } from './catalogos-Routing';

@NgModule({
  imports: [
    CommonModule,
    SourceMaterialModule,
    HttpClientModule,
    CatologosRoutingModule
  ],
  declarations: [CatalogoMainComponent, CivilStatusComponent, MeetingCategoryComponent, TypeMeetingsComponent, ConsultingRoomsComponent, ProfileComponent, TypeUserComponent]
})
export class CatalogosModule { }
