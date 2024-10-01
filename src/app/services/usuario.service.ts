import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private http = inject(HttpClient);
  private url = environment.api + 'usuario/';
  private token:any;

  constructor() { }

  getToken() { 
    this.token = JSON.parse(localStorage.getItem('token') || '{}').token;
    return {'Authorization': 'Bearer ' + this.token};
  }

  //funcion para obtener los datos del usuario
  getUsuario(){
    const headers = this.getToken();
    return this.http.get(this.url + 'myPerfil', {headers});
  }

  //funcion para actualizar los datos del usuario
  updateUsuario(form:any){
    const headers = this.getToken();
    return this.http.post(this.url + 'actualizar',form,{headers});
  }

  //funcion para obtener los posts de ese usuario
  getPosts(){
    const headers = this.getToken();
    return this.http.get(this.url + 'misPosts', {headers});
  }

  getPost(id:any){
    const headers = this.getToken();
    return this.http.get(this.url + 'myPost/' + id, {headers});
  }

  //funcion para crear un post
  createPost(form:any){
    const headers = this.getToken();
    return this.http.post(this.url + 'crearPost',form,{headers});
  }

  //funcion para actualizar un post
  updatePost(form:any, id:any){
    const headers = this.getToken();
    return this.http.post(this.url+'editarPost/'+id,form,{headers});
  }

  //funcion para eliminar un post
  deletePost(id:any){
    const headers = this.getToken();
    return this.http.delete(this.url + 'eliminarPost/' + id, {headers});
  }
}
