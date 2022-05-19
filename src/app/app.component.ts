import { Component } from '@angular/core';
import { IProduct } from './types/Products';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  productsList: IProduct[] = data;

  onHandleAdd(product: any){
    console.log('product', product);
    
    this.productsList.push(product);
  }
}
