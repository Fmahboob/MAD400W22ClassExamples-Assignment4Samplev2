import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { MessageService } from '../message.service';
import { PokemonService } from '../services/pokemon-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  digimonList: Content[];
  titleFound?: boolean;

  constructor(private pokemonService: PokemonService) {
    this.digimonList = [];
  }

  ngOnInit(): void {
    this.pokemonService.getdigimonObs().subscribe(digimon => {
      this.digimonList = digimon;
    } );
  }
  checkForTitle(title: string): void{
    if (this.digimonList.some(d => d.title === title))
    {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
    if (this.digimonList.filter(d => d.title === title).length)
    {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
  }
}
