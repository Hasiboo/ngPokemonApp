import { Injectable } from '@angular/core';
import {POKEMONS} from '../shared/list.pokemons';
import { Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  /**
  * Retourner la liste des pokemons
  * @return POKEMONS
  */
  getListPokemons() : Pokemon[] {
    return POKEMONS;
  }

  /**
  * Retourner le pokemon avec l'identifiant passé en paramètre
  * @param
  */
  getSinglePokemon(id: number) : Pokemon {
    const listPkm = this.getListPokemons();

    for (let i = 0; i < listPkm.length; i++){
      if (id === listPkm[i].id) {
        return listPkm[i];
      }
    }
  }

  /**
  * Récupérer les types d'un pokémon
  */
  getPokemonTypes(): string[] {
    return ['Plante','Feu','Eau','Insecte','Normal','Electrik','Poison','Fée','Vol'];
  }


}
