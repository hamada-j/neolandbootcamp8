import { ProductosService } from './../productos.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  arrProductos: Producto[];

  constructor(private productosService: ProductosService) { }

  async ngOnInit() {
    this.arrProductos = await this.productosService.getAll();
  }

  async manejarChange($event) {
    this.arrProductos = await this.productosService.getByCategoria($event.target.value);
  }

  async comprarProducto(pProducto) {
    if (!localStorage.getItem('idCarrito')) {
      // 2- Creo Carrito
      const response = await this.productosService.createCart();
      // 2.1 - Inserto el id en LS
      localStorage.setItem('idCarrito', response['token_cart']);
    }
    // 3- Agregamos el producto
    const responseAdd = await this.productosService.addProduct(pProducto);
    console.log(responseAdd);
  }

}
