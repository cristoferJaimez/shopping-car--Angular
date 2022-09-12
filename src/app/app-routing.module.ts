import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvoiceModalComponent } from './components/invoice-modal/invoice-modal.component';
import { ShoppingCarComponent } from './components/shopping-car/shopping-car.component';



//Rutas de Navegacion
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch : 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'shopping-car', component: ShoppingCarComponent },
  {path: 'invoicer', component: InvoiceModalComponent },
  {path: '**', redirectTo: 'home', pathMatch : 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
