import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CouponsServicesService } from '../../services/coupons-services.service'
import { Coupons } from '../../interface/coupons'
 

@Component({
  selector: 'list-buy',
  templateUrl: './list-buy.component.html',
  styleUrls: ['./list-buy.component.css']
})
export class ListBuyComponent implements OnInit {

  @Input()
  price:number = 0;
  @Input()
  iva:number = 0;
  @Input()
  total:number = 0;

  constructor(private router: Router, private servicioCupons: CouponsServicesService) {
    
  }

  buy_: Array<number> = [];
  cup: Array<Coupons> = [];
  textoDeInput: string = ""
  descuento: string = "";
  text_:string = "";
  ngOnInit(): void {
   this.buy();
  }

  buy(){
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
        if(element.coupons === this.textoDeInput){
          this.descuento = element.discount
          this.text_ = 'Cupon Valido'
        }else{
          this.text_ = "cupon invalido"
        }
    });

    this.total  = Number(this.total) -  (Number(this.total) * Number(this.descuento))
    console.log(this.total);
    localStorage.setItem('descuentos', this.total.toString())
  }


}
