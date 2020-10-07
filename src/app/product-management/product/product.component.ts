import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  starIcon = faStar;
  @Input() id: number;
  @Input() title: string = "Freddie Mercury: A Life, In His Own Words";
  @Input() author: string = "Freddie Mercury";
  @Input() price: number = 9.7;
  @Input() rating: number = 5;
  @Input() imageUrl: string = "https://m.media-amazon.com/images/I/41AIWIWFOIL.jpg";
  starsList: number[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.starsList = Array.from(Array(this.rating).keys());
  }

}
