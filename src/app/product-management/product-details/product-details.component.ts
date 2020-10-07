import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  starIcon = faStar;
  title: any = "Freddie Mercury: A Life, In His Own Words";
  price: any = 9.7;
  rating: number = 5;
  starsList: number[] = [];
  imageUrl: string = "https://m.media-amazon.com/images/I/41AIWIWFOIL.jpg";

  constructor() { }

  ngOnInit(): void {
    this.starsList = Array.from(Array(this.rating).keys());
  }

}
