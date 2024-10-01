import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private http = inject(HttpClient);
  private url = environment.api + 'posts/';
  private token:any;

  getToken() { 
    this.token = JSON.parse(localStorage.getItem('token') || '{}').token;
    return {'Authorization': 'Bearer ' + this.token};
  }

  ultimosPosts(){
    return this.http.get(this.url + 'ultimos');
  }

  postsByCategoria(id:string){
    return this.http.get(this.url + 'byCat/' + id);
  }

  create(form:any){
    const headers = this.getToken();
    return this.http.post(this.url, form, {headers});
  }

  update(form:any){
    const headers = this.getToken();
    return this.http.put(this.url, form, {headers});
  }

  delete(id:string){
    const headers = this.getToken();
    return this.http.delete(environment.api + 'admin/posts/' + id, {headers});
  }

  readAll(page: number = 1){
    const headers = this.getToken();
    return this.http.get(`${environment.api}admin/posts?page=${page}`, {headers});
  }

  //funcion que carga los ultimos 5 autores
  ultimos(){
    return this.http.get(this.url + 'ultimos');
  }

  //funcion que lleva a la categoria de un post
  verCat(id:string){
    return this.http.get(this.url + 'categoria/' + id);
  }

  todosPosts(){
    return this.http.get(this.url)
  }

  //funcion que lleva a un post
  verPost(id:string){
    return this.http.get(this.url + id);
  }

  getPosts(page: number){
    return this.http.get(this.url + '?page=' + page);
}
}
