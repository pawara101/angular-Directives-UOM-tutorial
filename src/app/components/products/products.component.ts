import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';

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

  public isLowInventoryDhal: any;
  public dhalQty: any;

  public rowIndex!: number;
  showAddProduct!: boolean;

  getRiceStorage() {
    this.riceQty = 350;
    if (this.riceQty < 200 && this.riceQty >= 50) {
      this.isLowInventory = true;
    }
    return this.riceQty;
  }

  getDhalStorage() {
    this.dhalQty = 100;
    if (this.dhalQty < 200 && this.dhalQty >= 50) {
      this.isLowInventoryDhal = true;
    }
    return this.dhalQty;
  }
  public products: Product[] = [];

  public selectProduct(selectedRow: number) {
    this.rowIndex = selectedRow;
  }

  showAddProducts() {
    this.showAddProduct = true;
  }

  hideAddProducts() {
    this.showAddProduct = false;
  }
}
