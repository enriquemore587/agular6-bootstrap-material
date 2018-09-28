import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMeetingsComponent } from './type-meetings.component';

describe('TypeMeetingsComponent', () => {
  let component: TypeMeetingsComponent;
  let fixture: ComponentFixture<TypeMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
