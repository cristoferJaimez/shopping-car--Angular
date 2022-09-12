import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CouponsServicesService } from '../../services/coupons-services.service'
import { Coupons } from '../../interface/coupons'


@Component({
  selector: 'list-buy',
  templateUrl: './list-buy.component.html',
  styleUrls: ['./list-buy.component.css']
})
export class ListBuyComponent implements OnInit {

  constructor(private router: Router, private servicioCupons: CouponsServicesService) {

  }

  buy_: Array<number> = [];
  cup: Array<Coupons> = [];
  textoDeInput: string = ""
  descuento: string = "";

  ngOnInit(): void {
    this.buy_ = JSON.parse(localStorage.getItem('buy')!)
    this.servicioCupons.get_coupons().subscribe(datos => {
      for (let i = 0; i < datos.length; i++) {
        this.cup.push(datos[i]);
      }

    });
  }

  navigation() {
    this.router.navigate(['/invoicer'])
  }

  

  cupon() {
    const found = this.cup.find(element => {
        if(element.coupons == this.textoDeInput){
          this.descuento = element.discount
          alert('cupon valido')
        }
    });

    this.buy_[0]  = Number(this.buy_[0]) -  (Number(this.buy_[0]) * Number(this.descuento))
    console.log(this.buy_[0]);
    localStorage.setItem('descuentos', this.buy_[0].toString())
  }


}
