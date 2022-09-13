import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ShoppingCarComponent implements OnInit {
  price:number = 0;
  iva:number = 0;
  total:number = 0;
  constructor() {  }

  ngOnInit(): void {
    
  }

}
