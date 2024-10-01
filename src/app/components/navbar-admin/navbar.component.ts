import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

/* @Component({
  selector: 'app-navbar-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'], // Usa styleUrls en lugar de styleUrl
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3000ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('3000ms', style({ opacity: 0 }))
      ])
    ])
  ]
}) */
export class NavbarAdminComponent {
  categorias:any = [];

  constructor(private categoriasService: CategoriaService){
    this.categoriasService.getCategorias().subscribe( res => {
      this.categorias = res;
    });
  }
}
