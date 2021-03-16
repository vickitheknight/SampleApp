import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {RepositaryService} from './repositary.service'
import { HttpClientModule } from '@angular/common/http';
import { ProdutsPageComponent } from './produts-page/produts-page.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProdutsPageComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
 
    
  ],
  providers: [RepositaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
