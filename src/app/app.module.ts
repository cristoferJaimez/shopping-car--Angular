import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCarComponent } from './components/shopping-car/shopping-car.component';
import { StoreComponentComponent } from './components/store-component/store-component.component';
import { ShoppingFilterComponent } from './components/shopping-filter/shopping-filter.component';
import { ShoppingProductComponent } from './components/shopping-product/shopping-product.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListShoppingComponent } from './components/list-shopping/list-shopping.component';
import { ListBuyComponent } from './components/list-buy/list-buy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvoiceModalComponent } from './components/invoice-modal/invoice-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCarComponent,
    StoreComponentComponent,
    ShoppingFilterComponent,
    ShoppingProductComponent,
    HomeComponent,
    NavBarComponent,
    ListShoppingComponent,
    ListBuyComponent,
    InvoiceModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
