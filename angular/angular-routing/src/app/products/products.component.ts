import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = "Products";

  products = [
    { id: 1, name: "aws", description: "i want to learn aws" }, 
    { id: 2, name: "java", description: "i want to learn java" }, 
    { id: 3, name: "python", description: "i want to learn python" }
  ];
}
