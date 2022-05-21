import { IProduct } from './../../types/Products';
import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product!: IProduct[];

  constructor(
    // private productServices: ProductService
  ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.product);
    
    // this.onAddProduct.emit(this.product);

    // this.productServices.addProduct(this.product).subscribe(data => {
    //   this.product = data
    // })
  }
}
