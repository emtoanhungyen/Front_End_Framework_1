import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/types/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products !: IProduct[];
  productDetail !: IProduct;
 
  constructor() { }
 
  onHandleGetInfo(product: IProduct){
    console.log('product', product);
    this.productDetail = product;
  } 

  onHandleRemove(id: number){
    this.products = this.products.filter(product => product.id !== id);
  }
  
  ngOnInit(): void {
  }

}
