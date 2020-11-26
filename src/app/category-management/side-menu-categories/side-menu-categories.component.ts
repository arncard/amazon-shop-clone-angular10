import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-menu-categories',
  templateUrl: './side-menu-categories.component.html',
  styleUrls: ['./side-menu-categories.component.css']
})
export class SideMenuCategoriesComponent implements OnInit {

  constructor(route: ActivatedRoute) 
  {
    // using params['id'] this component knows the current url
    // the component gets notified whenever a change in the URL occurs
    route.params.subscribe(params => console.log("side menu id parameter", params['id']));
  }

  ngOnInit(): void {
  }

}
