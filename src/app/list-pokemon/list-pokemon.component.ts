import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import {Router} from '@angular/router';
import {PokemonsService} from '../pokemons/pokemons.service'

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  constructor(private router: Router, private pokemonsService: PokemonsService ) { }

  pokemons: Pokemon[];

  ngOnInit(): void {
    this.pokemonsService.getListPokemons().subscribe(listPkm => this.pokemons = listPkm);
  }

  selectPokemon(pokemon: Pokemon): void{
    //Passer en paramètre l'url de redirection + les paramètres éventuels de la route.
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
