import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingRoomsComponent } from './consulting-rooms.component';

describe('ConsultingRoomsComponent', () => {
  let component: ConsultingRoomsComponent;
  let fixture: ComponentFixture<ConsultingRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultingRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
