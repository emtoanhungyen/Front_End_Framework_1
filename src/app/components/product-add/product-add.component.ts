import { IProduct } from './../../types/Products';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: IProduct = {
    name: "",
    price: 0,
    status: true
  }

  constructor(
    private productServices: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productServices.getProduct(id).subscribe(data => this.product = data);
  }
  onSubmit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.productServices.updateProduct(this.product).subscribe(data => console.log(data))
    } else {
      console.log(this.product);
      this.productServices.addProduct(this.product).subscribe(data => {
        console.log(data);
        //chuyển hướng
        this.router.navigateByUrl('/product')
      })
    }
  }
}
