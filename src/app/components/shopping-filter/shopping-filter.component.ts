import { Component, OnInit } from '@angular/core';
import { ServicesPlataformService } from '../../services/services-plataform.service';
import { ServicesCategoryService } from '../../services/services-category.service';
import { ServicesProductService } from '../../services/services-product.service';
import { Products } from '../../interface/products';
import { Plataform } from '../../interface/plataform';
import { Category } from '../../interface/category';

@Component({
  selector: 'shopping-filter',
  templateUrl: './shopping-filter.component.html',
  styleUrls: ['./shopping-filter.component.css'],
})
export class ShoppingFilterComponent implements OnInit {
  
  
  plataform: Array<Plataform> = [];
  category: Array<Category> = [];
  product: Array<Products> = [];

  filterPost = "";

  constructor(
    private servicioPlataform: ServicesPlataformService,
    private serviceCategory: ServicesCategoryService,
    private serviceProduct: ServicesProductService
  ) {}

  ngOnInit(): void {
    this.servicioPlataform.get_plataform().subscribe((datos) => {
      for (let i = 0; i < datos.length; i++) {
        this.plataform.push(datos[i]);
      }
    });

    //categorias
    this.serviceCategory.get_category().subscribe((datos) => {
      for (let i = 0; i < datos.length; i++) {
        this.category.push(datos[i]);
      }
     
    });

    //productos
    this.serviceProduct.get_product().subscribe((datos) => {
      for (let i = 0; i < datos.length; i++) {
        this.product.push(datos[i]);
      }
    
    });
  }
}
