import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDemandeComponent } from './button-demande.component';

describe('ButtonDemandeComponent', () => {
  let component: ButtonDemandeComponent;
  let fixture: ComponentFixture<ButtonDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
