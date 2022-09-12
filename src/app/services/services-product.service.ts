import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesProductService {
  servidor = "http://localhost:3000/API/products"
  constructor( private servicio:HttpClient ) { } 

  get_product():Observable<any>{
     return this.servicio.get(this.servidor);
  }
}
 