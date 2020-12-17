import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {PokemonsService} from '../pokemons.service'


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  listOfPokemons: Pokemon[] = null;
  pokemonToDisplay: Pokemon = null;

  constructor(private route: ActivatedRoute,private router: Router,private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonsService.getSinglePokemon(id).subscribe(pkm => this.pokemonToDisplay = pkm);
  }

  retour(): void{
    const link = ['/pokemon'];
    this.router.navigate(link);
  }

  editerPokemon(pokemonToEdit: Pokemon): void {
    const link = ['pokemon/edit', pokemonToEdit.id];
    this.router.navigate(link);
  }

  deletePokemon(pokemonToDelete: Pokemon): void {
    this.pokemonsService.deletePokemon(pokemonToDelete).subscribe(() => this.retour());
  }



}
