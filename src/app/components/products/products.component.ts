import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  componentName: string = "Hello word";

  isStatus: boolean = true;

  productName: string = "";

  productsList: {id: number, name: string, price: number, status: boolean}[] = [
    {id: 1, name: "Product A", price: 100, status: true},
    {id: 2, name: "Product B", price: 200, status: false},
    {id: 3, name: "Product C", price: 300, status: false}
  ];
  constructor() { }

  onClick() {
    this.isStatus = !this.isStatus;
  }

  onHandleRemove(id: number){
    this.productsList = this.productsList.filter(product => product.id !== id);
  }
  ngOnInit(): void {
  }

}
