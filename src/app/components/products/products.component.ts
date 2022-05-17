import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/types/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product !: IProduct[];
  productDetail !: IProduct;
 
  products: IProduct[] = [
    {id: 1, name: "Product A", price: 100, status: true},
    {id: 2, name: "Product B", price: 200, status: false},
    {id: 3, name: "Product C", price: 300, status: false}
  ];

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
