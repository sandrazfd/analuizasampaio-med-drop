import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  {path: "", redirectTo:"home",pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"products", component:ProductsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
