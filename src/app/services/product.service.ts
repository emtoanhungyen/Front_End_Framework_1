import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../types/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProduct(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }
  removeProduct(id: any) {
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  addProduct(product: any) {
    
  }
  productList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products`);
  }
  updateProduct() {

  }
}
