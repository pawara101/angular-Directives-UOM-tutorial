import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public isLowInventory: any;
  public riceQty: any;

  getRiceStorage() {
    this.riceQty = 350;
    if (this.riceQty < 200 && this.riceQty >= 50) {
      this.isLowInventory = true;
    }

    return this.riceQty;
  }
}
