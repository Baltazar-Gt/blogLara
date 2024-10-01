import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  hhtp = inject(HttpClient); //nos sirve para hacer peticiones a internet 
  router = inject(Router);
  url = environment.api;
  user:any;
  isLogin = new BehaviorSubject(false);
  constructor( 
  ) { }

  login(user:string,pass:string){
    let form = new FormData();
    form.append('email', user);
    form.append('password', pass);
    this.hhtp.post(this.url+'login',form).subscribe((res:any) =>{
      this.setLogin(res.login);
      localStorage.setItem('token', JSON.stringify({
        user: res.email,
        token: res.token
      }));
      if(res.login){
        this.router.navigate(['/admin']);
      }
    });
    return false;
  }

  setLogin(value:boolean){
    this.isLogin.next(value);
  }

  checktoken(){
    const token = JSON.parse(localStorage.getItem('token') || '{}').token;
    const email = JSON.parse(localStorage.getItem('token') || '{}').user;
    let form = new FormData();
    form.append('email',email);
    //auth bearer token 
    const headers=new HttpHeaders({'Authorization':`Bearer ${token}`});
    this.hhtp.post(this.url+'checkToken',form,{headers}).subscribe((res:any) =>{
      console.log(res);
      if(!res.login){
        this.router.navigate(['/login']);
      }
    }); 
    return true;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
