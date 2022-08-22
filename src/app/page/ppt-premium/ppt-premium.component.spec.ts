import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PptPremiumComponent } from './ppt-premium.component';

describe('PptPremiumComponent', () => {
  let component: PptPremiumComponent;
  let fixture: ComponentFixture<PptPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PptPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PptPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
