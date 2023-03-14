import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductListService } from '../../services/analogue-synths.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

// products : Product [];
@Input() product: Product;

constructor (private plService: ProductListService) {

}

onSelected() {
  this.plService.productSelected.emit(this.product);
}
}
