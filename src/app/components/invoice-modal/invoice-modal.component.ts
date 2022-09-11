import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'invoice-modal',
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.css']
})
export class InvoiceModalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigation(){
    this.router.navigate(['/home'])
  }

}
