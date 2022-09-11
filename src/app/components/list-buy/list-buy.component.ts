import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'list-buy',
  templateUrl: './list-buy.component.html',
  styleUrls: ['./list-buy.component.css']
})
export class ListBuyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigation(){
    this.router.navigate(['/invoicer'])
  }

}
