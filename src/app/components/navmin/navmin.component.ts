import { Component, OnInit, inject } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { RouterLink } from '@angular/router';
import { CategoriasService } from '../../services/categorias.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../services/usuario.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navmin',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navmin.component.html',
  styleUrl: './navmin.component.scss'
})
export class NavminComponent{

  http = inject(HttpClient);
  usuarioService = inject(UsuarioService);
  usuario: any = [];
  authService = inject(AuthService);
  isLogin: boolean=false;
  subscription: Subscription=new Subscription();
  
  constructor() {}

  ngOnInit() {
    this.subscription = this.authService.isLogin.subscribe(value => {
      this.isLogin = value;
      if (!value) {
        // Código para actualizar la interfaz de usuario cuando el usuario ya no está autenticado...
      }
    });
    this.cargarUsuario();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

cargarUsuario() {
  if (!this.isLogin) {
    return;
  }

  this.usuarioService.getUsuario().subscribe((res: any) => {
    this.usuario = res;
  });
}

  logout() {
    this.authService.logout();
    this.isLogin = false;
  }

collapseMenu() {
  const navbar = document.getElementById('navbarNav');
  if (navbar) {
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
}
}
