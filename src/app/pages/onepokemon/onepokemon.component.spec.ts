import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepokemonComponent } from './onepokemon.component';

describe('OnepokemonComponent', () => {
  let component: OnepokemonComponent;
  let fixture: ComponentFixture<OnepokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnepokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnepokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
