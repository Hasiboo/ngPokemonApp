import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import {POKEMONS} from '../shared/list.pokemons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  constructor(private router: Router) { }

  pokemons: Pokemon[];

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon): void{
    //Passer en paramètre l'url de redirection + les paramètres éventuels de la route.
    const link = ['/pokemon',pokemon.id];
    this.router.navigate(link);
  }

}
