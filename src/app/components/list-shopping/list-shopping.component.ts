import { Component, OnInit } from '@angular/core';
import { ServicesgamesService } from '../../services/servicesgames.service'
import { Games } from '../../interface/games'
import { json } from 'express';

@Component({
  selector: 'list-shopping',
  templateUrl: './list-shopping.component.html',
  styleUrls: ['./list-shopping.component.css']
})
export class ListShoppingComponent implements OnInit {

  num_: Array<number> = [];
  games:Array<Games> = [];
  car:Array<Games> = [];
  constructor(private servicioCliente : ServicesgamesService) { }

  ngOnInit(): void {
   this.reloadComponent()
  }


  //remover
  remove(id:object){
  
    localStorage.removeItem('carrito')
    this.car.forEach((val,i,arr)=>{
      if( JSON.stringify(arr[i])== JSON.stringify(id) ){        
          this.car.splice(i, 1)  
      }
          
    localStorage.setItem("carrito",  JSON.stringify(this.car))
    })

    console.log(this.car);
    

    this.car = []
    this.reloadComponent()
  }

  reloadComponent() {
    this.num_ = JSON.parse(localStorage.getItem('carrito')!)
    console.log(this.num_);

    this.servicioCliente.get_game().subscribe(datos => {
      for(let i=0; i<datos.length; i++){
        this.games.push(datos[i]);
      }
           
      for( let i = 0; i < this.num_.length; i++){
        for( let x =0; x < this.games.length; x++){
            if(this.num_[i].toString() == this.games[x].idtbl_product.toString()){
                console.log("verdad");
                this.car.push(datos[i])
                break
            }
        }
      }
      
      console.log(this.car);

      });

  }

}
