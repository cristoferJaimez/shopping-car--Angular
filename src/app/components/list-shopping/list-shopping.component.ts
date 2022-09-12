import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ServicesgamesService } from '../../services/servicesgames.service'
import { Games } from '../../interface/games'

@Component({
  selector: 'list-shopping',
  templateUrl: './list-shopping.component.html',
  styleUrls: ['./list-shopping.component.css'],
  
})
export class ListShoppingComponent implements OnInit {

  @Output() private textoEmitido = new EventEmitter<string>();
  num_: Array<number> = [];
  games: Array<Games> = [];
  car: Array<Games> = [];
  total: number = 0;
  Iva: number = 0;
  Iva_Total = 0;

  
  constructor(private servicioCliente: ServicesgamesService) {
    this.reloadComponent()
  }

  ngOnInit(): void {
    
  }


  //remover
  remove(id: object) {
    try {

      localStorage.removeItem('carrito')
      this.car.forEach((val, i, arr) => {
        if (JSON.stringify(arr[i]) == JSON.stringify(id)) {
          this.car.splice(i, 1)
        }

        localStorage.setItem("carrito", JSON.stringify(this.car))
      })

      //console.log(this.car);

      //this.car = []
      this.reloadComponent()
    } catch (error) {

    }
  }

  reloadComponent() {
    try {
      //actualizar componente hijo
      

      this.num_ = JSON.parse( localStorage.getItem('carrito')!)
      console.log(this.num_);

      this.servicioCliente.get_game().subscribe(datos => {
        for (let i = 0; i <datos.length; i++) {
          this.games.push(datos[i]);
        }

        for (let i = 0; i <this.num_.length; i++) {
          for (let x = 0; x <this.games.length; x++) {
            if (this.num_[i].toString() === this.games[x].idtbl_product.toString()) {
              this.car.push(datos[x])
              break
            }
          }
        }
        this.buy(this.car)

        //console.log(this.car);

      });
    } catch (error) {

    }


  }

  buy(car: Array<Games>) {

    try {

      car.forEach((val, i, arr) => {
        this.total = this.total + Number(arr[i].price_product)
      })
      this.Iva = this.total * 0.019;
      this.Iva_Total = this.total + this.Iva;
      console.log(this.total, this.Iva);

      if (this.car.length === 0) {
        localStorage.setItem("buy", JSON.stringify([0, 0, 0]))
      } else {
        localStorage.setItem("buy", JSON.stringify([this.Iva_Total, this.Iva, this.total]))
      }

    } catch (error) {

    }


  }

}
