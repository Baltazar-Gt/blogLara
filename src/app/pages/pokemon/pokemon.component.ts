import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonApi } from '../../interfaces/pokemon-api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

pokemons!: PokemonApi;

  constructor( private pokemoService: PokemonService){

  }

  ngOnInit(){
    this.pokemoService.getPokemons().subscribe((r)=>{
      this.pokemons = r;
    })
  }
}
