import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() onAddProduct = new EventEmitter();

  product: {name: string, price: number} = {
    name: "",
    price: 0
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('ok');
    console.log('this.product', this.product);
    
    this.onAddProduct.emit(this.product);
  }
}
