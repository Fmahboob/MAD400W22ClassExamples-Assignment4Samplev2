import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { digimonList } from '../helper-files/ContentDb';
import { MessageService } from '../message.service';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

 

  constructor(private http: HttpClient) { }
  
  getdigimonList(): Content[]{

    return digimonList;
  }

  getdigimonObs(): Observable<Content[]>{

    
    return this.http.get<Content[]>("api/content");
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  getIndividualDigimon(id: number): Observable<Content[]>{
    let digimon: any;
    if(id > digimonList.length || id < 0){
     return digimon;
    }
    else {
       digimon = of(digimonList.filter(digimon => digimon.id === id));
    }
    return digimon;
  }

  
  addContent(newContentItem: Content): Observable<Content>{
    console.log("Adding a new pokemon: ", newContentItem);
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem,  this.httpOptions);
  }
}
