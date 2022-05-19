import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/types/Products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product !: IProduct;
  constructor(
    private router: ActivatedRoute,
    private serviceProduct: ProductService
  ) {
    console.log(this.router.snapshot.paramMap.get('id'));
    const id = this.router.snapshot.paramMap.get('id');

    this.product = this.serviceProduct.getProduct(id)!;
    console.log(this.product);
    
  }

  ngOnInit(): void {
  }

}
