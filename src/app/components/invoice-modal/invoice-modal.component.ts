import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from 'src/app/interface/games';

@Component({
  selector: 'invoice-modal',
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.css']
})
export class InvoiceModalComponent implements OnInit {
  buy_: Array<number> = [];
  buy__: Array<Games> = [];
  buy___: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    

    this.invoice()
    
  }

  navigation(){
    localStorage.removeItem('buy')
    localStorage.removeItem('carrito')


    this.router.navigate(['/home'])
  }

  invoice(){
    this.buy__ =  JSON.parse(localStorage.getItem('carrito')!)
    this.buy_ =  JSON.parse(localStorage.getItem('buy')!)
    this.buy___=  JSON.parse(localStorage.getItem('descuentos')!)

   
    console.log(this.buy__);
    
  }

  

}
