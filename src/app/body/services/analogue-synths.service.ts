import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  productSelected = new EventEmitter <Product>();


  private aSproducts : Product [] = [
    new Product (1,'AS', 'Product N1', 'Sample description', 199, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-z_Yn1sa3VXdzYw7QvabMfsbGRqyLfI5Kw&usqp=CAU'),
    new Product (2,'AS', 'Product N2', 'Sample description', 199, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-z_Yn1sa3VXdzYw7QvabMfsbGRqyLfI5Kw&usqp=CAU'),
    new Product (3,'AS', 'Product N3', 'Sample description', 199, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-z_Yn1sa3VXdzYw7QvabMfsbGRqyLfI5Kw&usqp=CAU'),
  ]

  private dSproducts : Product [] = [
    new Product (1,'AS', 'Product N1', 'Sample description', 199, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDyrC41G1Bt10NbBs4EwecRjoHyvEmitqhog&usqp=CAU'),
  ]

  seqPorducts : Product [] = [

  ]
  constructor() { }

  getAsProducts () {
    return this.aSproducts.slice();
  }
  getDsProducts () {
    return this.dSproducts.slice();
  }
  getSeqProducts () {
    return this.seqPorducts.slice();
  }
}
