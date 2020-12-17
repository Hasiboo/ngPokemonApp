import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Pokemon} from '../../pokemon';
import {Router} from '@angular/router';
import {PokemonsService} from '../pokemons.service';
import {debounce, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  private searchTerms = new Subject();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokemonService.searchPokemons(term)),
    );
  }

  // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
  search(term: string): void {
    // Stocker les recherches succesives de l'utilisateur.
    this.searchTerms.next(term);
  }

  gotoDetail(pokemon: Pokemon): void {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
