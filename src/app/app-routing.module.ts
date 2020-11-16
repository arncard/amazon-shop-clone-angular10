import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-management/product-details/product-details.component';
import { ProductComponent } from './product-management/product/product.component';
import { RoutingGuard } from './shared/routing-guard.guard';


const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  },  
  { 
    path: 'login', 
    component: LoginComponent 
  },  
  { 
    path: 'checkout', 
    component: CheckoutComponent, 
    canActivate: [RoutingGuard] 
  },
  { 
    path: 'product', 
    component: ProductComponent 
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
