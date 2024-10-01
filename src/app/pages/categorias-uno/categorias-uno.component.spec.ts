import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasUnoComponent } from './categorias-uno.component';

describe('CategoriasUnoComponent', () => {
  let component: CategoriasUnoComponent;
  let fixture: ComponentFixture<CategoriasUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasUnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
