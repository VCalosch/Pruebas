import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorFComponent } from './administrador-f.component';

describe('AdministradorFComponent', () => {
  let component: AdministradorFComponent;
  let fixture: ComponentFixture<AdministradorFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
