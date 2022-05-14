import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from 'src/app/components/demo.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AppProductComponent } from './components/app-product/app-product.component';

@NgModule({
  declarations: [
    AppComponent, DemoComponent, PagesComponent, ProductsComponent, ProductDetailComponent, AppProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
