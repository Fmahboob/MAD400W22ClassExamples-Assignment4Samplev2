import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { PokemonService } from './services/pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  title = 'AssignmentSample';
  id = 1;
  digimon: Content[] = [];
  newdigimonList: Content[] = [];
  
  constructor(private pokemonService: PokemonService) {
    
  }
public findDigimon(id: string){
  this.id = parseInt(id);
  this.newdigimonList = this.pokemonService.getdigimonList();
  if(this.id > this.newdigimonList.length || this.id < 0){

    
    this.pokemonService.getIndividualDigimon(this.id).subscribe(digimon => {
      this.digimon = digimon;
      this.digimon.push();
      
    });
   }
   else {
     return
   }
}

}
