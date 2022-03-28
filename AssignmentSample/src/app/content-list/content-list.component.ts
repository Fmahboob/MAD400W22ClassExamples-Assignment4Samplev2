import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
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
    
    this.pokemonService.getdigimonObs().subscribe(digimonList => {
      
      this.digimonList= digimonList;
    });
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
 
  
  getContentFromServer(): void {
    this.pokemonService.getdigimonObs().subscribe(digimonList => {
      console.log("Got the content from the server: ", digimonList);
      this.digimonList= this.digimonList;
    });
  }

  addPokemonToList(newContentItem: Content): void {
    this.pokemonService.addContent(newContentItem).subscribe(newContentFromServer => {
      console.log("Content added and came back from the server!", newContentFromServer);

      //
      this.getContentFromServer();

      
    });
  }

  
}
