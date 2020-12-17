import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {PokemonsModule} from './pokemons/pokemons.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from './shared/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    AppRoutingModule,
    PokemonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
