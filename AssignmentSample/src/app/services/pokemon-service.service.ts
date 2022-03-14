import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { digimonList } from '../helper-files/ContentDb';
import { MessageService } from '../message.service';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private messageService: MessageService) { }
  getdigimonList(): Content[]{

    return digimonList;
  }

  getdigimonObs(): Observable<Content[]>{
    const digimon = of(digimonList);
    this.messageService.add('Pokemos service loaded pokemon')
    return digimon;
  }

  getIndividualDigimon(id: number): Observable<Content[]>{
    let digimon: any;
    if(id > digimonList.length || id < 0){

    
     this.messageService.add('id {id} is not valid plese enter another id');
     return digimon;
    }
    else {
       digimon = of(digimonList.filter(digimon => digimon.id === id));
    }this.messageService.add('Digimon from digimonList at id {id} is loaded');
    return digimon;
  }
}
