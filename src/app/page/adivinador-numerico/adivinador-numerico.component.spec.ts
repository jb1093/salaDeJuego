import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinadorNumericoComponent } from './adivinador-numerico.component';

describe('AdivinadorNumericoComponent', () => {
  let component: AdivinadorNumericoComponent;
  let fixture: ComponentFixture<AdivinadorNumericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinadorNumericoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinadorNumericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
