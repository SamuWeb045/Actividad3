import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'; //Importamos el mock HEROES 

//Agregamos una propieda hero llamado Windstorm
//Eliminamos hero id y name de la clase HeroesComponent


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    
    heroes = HEROES;
    selectedHero: Hero | undefined;
  
    constructor() { }
  
    ngOnInit() {
    }
    
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
  }