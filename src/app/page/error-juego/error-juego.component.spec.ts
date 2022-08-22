import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorJuegoComponent } from './error-juego.component';

describe('ErrorJuegoComponent', () => {
  let component: ErrorJuegoComponent;
  let fixture: ComponentFixture<ErrorJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
