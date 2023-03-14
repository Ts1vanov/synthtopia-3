import { Component,Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductListService } from '../services/analogue-synths.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product: Product;

  constructor (private slService: ProductListService) { }
}
