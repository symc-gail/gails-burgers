import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBurgerComponent } from './featured-burger.component';

describe('FeaturedBurgerComponent', () => {
  let component: FeaturedBurgerComponent;
  let fixture: ComponentFixture<FeaturedBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
