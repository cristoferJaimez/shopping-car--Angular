import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesCategoryService {

  servidor = "http://localhost:3000/API/category"

  constructor( private servicio:HttpClient ) { } 

  get_category():Observable<any>{
     return this.servicio.get(this.servidor);
  }
}
 