import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { VILLAINS } from '../mock-villains';
import { Villain } from '../villain';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero; 
  
  villains = VILLAINS;

 /*
 
  
  hero = 'Windstorm';
 
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
   }; */

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
