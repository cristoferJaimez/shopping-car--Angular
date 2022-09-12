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

  constructor(private router: Router) { }

  ngOnInit(): void {
    

    this.invoice()
    
  }

  navigation(){
    this.router.navigate(['/home'])
  }

  invoice(){
    this.buy__ =  JSON.parse(localStorage.getItem('carrito')!)
    this.buy_ =  JSON.parse(localStorage.getItem('buy')!)
   
    console.log(this.buy__);
    
  }

}
