import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { PokemonApi } from '../interfaces/pokemon-api';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url_api:string = environment.url_api + "pokemon";

  constructor( private http: HttpClient ) {
    
   }

  getPokemons(){
    return this.http.get<PokemonApi>(this.url_api);
  }

  getPokemon(id:string){
    return this.http.get<any>(this.url_api + '/'+id);
  }
}
