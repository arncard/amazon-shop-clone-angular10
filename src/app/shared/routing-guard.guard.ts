import { Injectable } from '@angular/core';
import { 
  CanActivate, ActivatedRouteSnapshot, 
  RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './authentication/authenticate-service';

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {
 
  constructor(private auth: AuthenticateService,
    private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    if(this.auth.IsSignedIn())  
      return true;
    //window.alert('You dont have permission to view this page.');
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
  
}
