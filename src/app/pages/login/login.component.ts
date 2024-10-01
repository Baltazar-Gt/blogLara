import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  nota:boolean = false;

  ruteador = inject(Router);

  auth=inject(AuthService);

  usuario!:string;
  password!:string;

  acceder(){
    if(!this.auth.login(this.usuario, this.password)){
      this.nota = true;
    }
  }
}
