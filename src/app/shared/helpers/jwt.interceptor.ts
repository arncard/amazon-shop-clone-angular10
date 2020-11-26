import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticateService } from '../authentication/authenticate-service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor
{
  /**
   *
   */
  constructor(private authService: AuthenticateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.authService.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = req.url.startsWith(environment.apiUrl);
    if(isLoggedIn && isApiUrl)
    {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`
        }
      });
    }
    return next.handle(req);
  }

}