import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) { }
  
  list(){
    return this.httpClient.get(`http://localhost:8080/api/v1/card/list`);
  }
  get(id: number){
    return this.httpClient.get(`http://localhost:8080/api/v1/card/${id}`);
  }
  create(card: any){
    return this.httpClient.post(`http://localhost:8080/api/v1/card`, card);
  }
  update(id: number, card : any){
    return this.httpClient.put(`http://localhost:8080/api/v1/card/${id}`, card)
  }
  delete(id: number){
    return this.httpClient.get(`http://localhost:8080/api/v1/card/${id}`)
  }
}
