import { Producto } from './../models/producto';
import { ProductosService } from './../productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  arrProductos: Producto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getCart()
      .then(response => {
        this.arrProductos = response;
      })
  }

  borrarProducto(pProducto) {
    this.productosService.deleteProduct(pProducto)
      .then(async response => {
        console.log(response);
        this.arrProductos = await this.productosService.getCart();
      })
  }

}
