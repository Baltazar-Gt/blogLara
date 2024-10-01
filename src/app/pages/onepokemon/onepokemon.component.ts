import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onepokemon',
  standalone: true,
  imports: [],
  templateUrl: './onepokemon.component.html',
  styleUrl: './onepokemon.component.scss'
})
export class OnepokemonComponent implements OnInit{
  private http = inject(PokemonService);
  private ruta = inject(ActivatedRoute);
  pokemon: any;
  id:string = '';

  ngOnInit(){
    this.id = this.ruta.snapshot.paramMap.get('id') || '';
    this.http.getPokemon(this.id).subscribe((res:any)=>{
      this.pokemon = res;
    });
  }
}
