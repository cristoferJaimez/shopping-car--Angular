import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponsServicesService {


  servidor = "http://localhost:3000/API/coupons"

  constructor( private servicio:HttpClient ) { } 

  get_coupons():Observable<any>{
     return this.servicio.get(this.servidor);
  }
}
