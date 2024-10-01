import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private http = inject(HttpClient);
  private url = environment.api + 'users/';
  private token: any;

  
  getToken() {
    this.token = JSON.parse(localStorage.getItem('token') || '{}').token;
    return { 'Authorization': 'Bearer ' + this.token };
  }

  getUsuariosAdmin(page: number = 1) {
    const headers = this.getToken();
    return this.http.get(environment.api + 'admin/users?page=' + page, { headers });
  }

  getUsuario(id: string) {
    const headers = this.getToken();
    return this.http.get(environment.api + 'admin/users/'+ id, { headers });
  }

  create(form: any) {
    const headers = this.getToken();
    return this.http.post(environment.api + 'admin/users', form, { headers });
  }

  update(form: any,id:string) {
    const headers = this.getToken();
    return this.http.post(environment.api + 'admin/users/update/' + id, form, { headers });
  }

  delete(id: string) {
    const headers = this.getToken();
    return this.http.delete(environment.api + 'admin/users/' + id, { headers });
  }

  readAll() {
    const headers = this.getToken();
    return this.http.get(environment.api + 'users', { headers });
  }

  read(id: string) {
    const headers = this.getToken();
    return this.http.get(this.url + id, { headers });
  }

  //funcion que carga los ultimos 3 autores
  ultimos() {
    return this.http.get(this.url + 'ultimos');
  }

  verTodos(){
    return this.http.get(this.url+'todos');
  }
  
  verAutor(id: string) {
    return this.http.get(this.url + id);
  }

}
