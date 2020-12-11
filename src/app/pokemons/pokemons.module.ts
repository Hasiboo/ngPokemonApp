import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from '../pokemons/detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from '../shared/directives/border-card.directive';
import { PokemonTypeColorPipe } from '../shared/pipes/pokemon-type-color.pipe';
import {PokemonsService} from '../pokemons/pokemons.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule} from '@angular/forms';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    PokemonEditComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    PokemonsService
  ]
})
export class PokemonsModule { }
