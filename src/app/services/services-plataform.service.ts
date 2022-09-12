import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesPlataformService {

  servidor = "http://localhost:3000/API/plataform"

  constructor( private servicio:HttpClient ) { } 

  get_plataform():Observable<any>{
     return this.servicio.get(this.servidor);
  }
}
