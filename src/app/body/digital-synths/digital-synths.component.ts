import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductListService } from '../services/analogue-synths.service';

@Component({
  selector: 'app-digital-synths',
  templateUrl: './digital-synths.component.html',
  styleUrls: ['./digital-synths.component.css']
})
export class DigitalSynthsComponent {

  products: Product [];
  productSelected: Product;

  constructor (private plService: ProductListService) {}

  ngOnInit() {
    this.products = this.plService.getDsProducts();
    this.plService.productSelected.subscribe((product: Product) =>{
      this.productSelected = product;
    } )
  }
}
