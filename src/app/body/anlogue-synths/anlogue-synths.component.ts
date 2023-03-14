import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductListService } from '../services/analogue-synths.service';
// import { MyFilterPipe } from '../pipes/MyFilterPipe.pipe';

@Component({
  selector: 'app-anlogue-synths',
  templateUrl: './anlogue-synths.component.html',
  styleUrls: ['./anlogue-synths.component.css']
})
export class AnalogueSynthsComponent implements OnInit {
  products: Product [];
  productSelected: Product;

  constructor (private plService: ProductListService) {}

  ngOnInit() {
    this.products = this.plService.getAsProducts();
    this.plService.productSelected.subscribe((product: Product) =>{
      this.productSelected = product;
    } )
  }
}
