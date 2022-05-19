import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: IProduct[];

  constructor(
    private productService: ProductService
  ) {
    this.products = this.productService.productList()!;
  }

  // onHandleGetInfo(product: IProduct){
  //   console.log('product', product);
  //   this.productDetail = product;
  // } 

  // onHandleRemove(id: number){
  //   this.products = this.products.filter(product => product.id !== id);
  // }

  ngOnInit(): void {
  }

}
