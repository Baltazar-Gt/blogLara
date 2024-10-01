import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

export class CategoriaService {

  private http = inject(HttpClient);
  private url = environment.api + 'categoria/';
  private token: any;

  getCategorias(){
    return this.http.get(this.url);
  }
 
  getToken() { 
    this.token = JSON.parse(localStorage.getItem('token') || '{}').token;
    return {'Authorization': 'Bearer ' + this.token};
  }
    create(form:any){
    const headers = this.getToken();
    return this.http.post(this.url + 'admin/categoria',form,{headers});
  }
 
  getCategoriasAdmin(){
    const headers = this.getToken();
    return this.http.get(this.url + 'admin/categoria', {headers});
  }

  update(form:any){
    const headers = this.getToken();
    return this.http.put(this.url + 'admin/categoria', form, {headers});
  }

  delete(id:string){
    const headers = this.getToken();
    return this.http.delete(this.url + 'admin/categoria/' + id, {headers});
  }

  
/* 
  private http = inject(HttpClient);
  private url = environment.api+'categoria';
  private token:any;

  todasCategorias(){
    return this.http.get(this.url);
  } */
}
