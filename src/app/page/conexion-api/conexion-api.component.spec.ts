import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionApiComponent } from './conexion-api.component';

describe('ConexionApiComponent', () => {
  let component: ConexionApiComponent;
  let fixture: ComponentFixture<ConexionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexionApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
