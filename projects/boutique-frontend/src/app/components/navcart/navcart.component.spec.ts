import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcartComponent } from './navcart.component';

describe('NavcartComponent', () => {
  let component: NavcartComponent;
  let fixture: ComponentFixture<NavcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
