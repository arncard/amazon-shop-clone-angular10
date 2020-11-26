import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardsComponent } from './category-cards/category-cards.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { SideMenuCategoriesComponent } from './side-menu-categories/side-menu-categories.component';

const CATEGORY_ROUTES: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      {
        path: '',
        component: CategoryCardsComponent
      },
      {
        // The component SideMenuCategoriesComponent's template will be displayed inside 
        // the router outlet named 'sidemenu'
        path: '',
        outlet: 'sidemenu',
        component: SideMenuCategoriesComponent
      }
    ]
  }
]

@NgModule({
  declarations: [CategoriesComponent, CategoryCardsComponent, SideMenuCategoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CATEGORY_ROUTES)
  ]
})
export class CategoryModule { }
