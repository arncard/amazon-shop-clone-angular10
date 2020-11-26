import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-management/product-details/product-details.component';
import { ProductComponent } from './product-management/product/product.component';
import { RoutingGuard } from './shared/routing-guard.guard';
import { LoginComponent } from './shared/authentication/login/login.component';


const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  },  
  { 
    path: 'login', 
    component: LoginComponent 
  },  
  // {
  //   path: 'signup',
  //   component: 
  // },
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
  },
  { 
    // fallback route
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
