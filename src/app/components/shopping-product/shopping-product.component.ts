import { Component, OnInit } from '@angular/core';
import { ServicesgamesService } from '../../services/servicesgames.service'
import { Games } from '../../interface/games'

@Component({
  selector: 'shopping-product',
  templateUrl: './shopping-product.component.html',
  styleUrls: ['./shopping-product.component.css']
})
export class ShoppingProductComponent implements OnInit {

  games:Array<Games> = [];
  car : Array<string> = [];

  constructor( private servicioCliente : ServicesgamesService){}

  ngOnInit(): void {
    this.servicioCliente.get_game().subscribe(datos => {
        for(let i=0; i<datos.length; i++){
          this.games.push(datos[i]);
        }
                
    })
  }

  add_product(id:string, cat:string, img:string, price:number){
    this.car.push(id,cat, img, price.toString())
    localStorage.setItem("carrito",  JSON.stringify(this.car))
    console.log(this.car);
  }

}
