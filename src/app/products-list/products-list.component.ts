import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import data from '../../assets/json/products-list.json';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {


  products : Product [] = data
}
