import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductListService } from '../services/analogue-synths.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product: Product;
id: number;

  constructor (private plService: ProductListService,
               private route:ActivatedRoute) { }


  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.product = this.plService.getASProduct(this.id);
        console.log('id')
      }
    );
  }
}
