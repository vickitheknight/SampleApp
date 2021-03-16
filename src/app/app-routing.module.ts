import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProdutsPageComponent } from './produts-page/produts-page.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'products', 
    pathMatch: 'full'
   },
  {
    path:"test",
    component:LoginPageComponent
  },
  {
    path:"products",
    component:ProdutsPageComponent,
  },
  {
    path:"addproduct",
    component:AddProductComponent
  }
  ,
  {
    path:"addproduct/:id",
    component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
