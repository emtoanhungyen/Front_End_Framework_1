import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../types/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL: string = `http://localhost:3000/products`;

  constructor(
    private http: HttpClient
  ) { }

  getProduct(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }
  removeProduct(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}`, product);
  }
  productList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}`);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_URL}/${product.id}`, product);
  }
}
