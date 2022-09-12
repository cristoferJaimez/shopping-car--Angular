import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesgamesService {

 servidor = "http://localhost:3000/API/games"

  constructor( private servicio:HttpClient ) { } 

  get_game():Observable<any>{
     return this.servicio.get(this.servidor);
  }
}
