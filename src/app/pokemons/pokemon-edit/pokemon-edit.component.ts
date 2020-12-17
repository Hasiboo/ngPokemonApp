import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';
import {PokemonsService} from '../pokemons.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.css']
})
export class PokemonEditComponent implements OnInit {

  singlePokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonsService.getSinglePokemon(id).subscribe(pkm => this.singlePokemon = pkm);
  }

}
