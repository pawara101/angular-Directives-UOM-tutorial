import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'https://host1.open.uom.lk:8000/';

  constructor(private http:HttpClient) { }


  addProduct(product:Product){

  }



}