import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  products = [
    {
      id: 1,
      title: "Freddie Mercury: A Life, In His Own Words",
      author: "Freddie Mercury",
      price: 9.7,
      rating: 5,
      imageUrl: "https://m.media-amazon.com/images/I/41AIWIWFOIL.jpg"
    },
    {
      id: 2,
      title: "Me: Elton John Official Autobiography",
      author: "Elton John",
      price: 14.15,
      rating: 5,
      imageUrl: "https://m.media-amazon.com/images/I/41TJxOmPRjL.jpg"
    }
  ];
  
  ngOnInit(): void {
  }

}
