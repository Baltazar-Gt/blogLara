import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private http = inject(HttpClient);
  private url = environment.api + 'categoria/';
  private token:any;

  constructor() { }

  getCategorias(){
    return this.http.get(this.url);
  }

  getCategoria(id:string){
    return this.http.get(this.url + id);
  }

  getToken() { 
    this.token = JSON.parse(localStorage.getItem('token') || '{}').token;
    return {'Authorization': 'Bearer ' + this.token};
  }

  create(form:any){
    const headers = this.getToken();
    return this.http.post(environment.api + 'admin/categoria',form,{headers});
  }

  getCategoriasAdmin(){
    const headers = this.getToken();
    return this.http.get(environment.api + 'admin/categoria', {headers});
  }

  update(form:any, id:string){
    const headers = this.getToken();
    return this.http.post(environment.api + 'admin/categoria/update/' + id, form, {headers});    
    }

  delete(id:string){
    const headers = this.getToken();
    return this.http.delete(environment.api + 'admin/categoria/' + id, {headers});
  }
  

}
