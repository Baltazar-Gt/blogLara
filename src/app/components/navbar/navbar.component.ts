import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  categorias:any = [];

  constructor(private categoriasService: CategoriaService){
    this.categoriasService.getCategorias().subscribe( res => {
      this.categorias = res;
    });
  }
}
