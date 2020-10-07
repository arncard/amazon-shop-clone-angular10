import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchIcon = faSearch;
  shoppingBasket = faShoppingBasket;
  constructor() { }

  ngOnInit(): void {
  }

}
