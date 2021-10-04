import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashTabComponent } from './splash-tab.component';

describe('SplashTabComponent', () => {
  let component: SplashTabComponent;
  let fixture: ComponentFixture<SplashTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
