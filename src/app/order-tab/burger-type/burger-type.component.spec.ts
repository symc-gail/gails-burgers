import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerTypeComponent } from './burger-type.component';

describe('BurgerTypeComponent', () => {
  let component: BurgerTypeComponent;
  let fixture: ComponentFixture<BurgerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
