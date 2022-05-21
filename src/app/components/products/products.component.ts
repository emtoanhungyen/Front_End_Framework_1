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
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }
  delete(id: any) {
    const confirm = window.confirm("Bạn có muốn xóa?");
    if (confirm) {
      this.productService.removeProduct(id).subscribe(data => {
        // reRender
      })
    }
  }
  getProductList() {
    this.productService.productList().subscribe(data => {
      this.products = data;
    })
  }
}
