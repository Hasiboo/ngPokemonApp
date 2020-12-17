import { Component,Input, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';
import {Router} from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  types: Array<String>;
  @Input() pokemon: Pokemon;

  constructor(private router: Router,private pokemonsService: PokemonsService) { }

  hasType(type: string): boolean {
    const index = this.pokemon.types.indexOf(type);
    return (index > -1) ? true : false;
  }

  selectType($event: any, type: string): void {
    const checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      if ( index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  onSubmit(): void {
    console.log('Submit form !');
    this.pokemonsService.updatePokemon(this.pokemon).subscribe(() => this.goBack());
  }

  private goBack(): void {
    const link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link);
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  ngOnInit(): void {
    this.types=this.pokemonsService.getPokemonTypes();
  }

}
