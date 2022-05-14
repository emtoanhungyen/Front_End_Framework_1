import { Component } from '@angular/core';
import { IProduct } from './types/Products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  productsList: IProduct[] = [
    {id: 1, name: "Product A", price: 100, status: true},
    {id: 2, name: "Product B", price: 200, status: false},
    {id: 3, name: "Product C", price: 300, status: false}
  ];
}
