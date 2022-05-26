import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductsComponent } from './components/products/products.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/edit/:id', component: ProductAddComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
