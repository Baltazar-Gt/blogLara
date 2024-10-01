import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavminComponent } from './navmin.component';

describe('NavminComponent', () => {
  let component: NavminComponent;
  let fixture: ComponentFixture<NavminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
