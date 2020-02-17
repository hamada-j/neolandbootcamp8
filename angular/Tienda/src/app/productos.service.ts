import { Producto } from './models/producto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://neolandshop.ngrok.io/items';
  }

  getAll(): Promise<Producto[]> {
    return this.httpClient.get<Producto[]>(this.baseUrl).toPromise();
  }

  getByCategoria(cat: string) {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/${cat}`).toPromise();
  }

  createCart() {
    return this.httpClient.post(`${this.baseUrl}/newcart`, {}).toPromise();
  }

  addProduct(pProducto) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cart-Token': localStorage.getItem('idCarrito')
      })
    }
    const body = {
      item_id: pProducto.id
    };
    return this.httpClient.post(`${this.baseUrl}/new`, body, httpOptions).toPromise();
  }

}
