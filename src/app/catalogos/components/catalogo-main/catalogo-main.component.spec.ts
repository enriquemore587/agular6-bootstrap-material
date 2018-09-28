import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoMainComponent } from './catalogo-main.component';

describe('CatalogoMainComponent', () => {
  let component: CatalogoMainComponent;
  let fixture: ComponentFixture<CatalogoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
