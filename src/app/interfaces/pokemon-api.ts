import { Pokemon } from './pokemon'

export interface PokemonApi {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}
