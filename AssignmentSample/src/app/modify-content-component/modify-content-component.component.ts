
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Content } from '../helper-files/content-interface';
import { PokemonService } from '../services/pokemon-service.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Input() contentList?: Content[];
  newPokemon?: Content;

  constructor(private pokemonService: PokemonService ) { }

  ngOnInit(): void {
  }

  addPokemon(name: string, description: string, creator: string, imgURL: string, type: string, tags: string): void {
    this.newPokemon = {
      title: name,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags:tags.split(",")
    };
    
    this.pokemonService.addContent(this.newPokemon).subscribe(newServerContent => this.contentList!.push(newServerContent));
  }
}
