import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargadoPlayasComponent } from './encargado-playas.component';

describe('EncargadoPlayasComponent', () => {
  let component: EncargadoPlayasComponent;
  let fixture: ComponentFixture<EncargadoPlayasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncargadoPlayasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargadoPlayasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
