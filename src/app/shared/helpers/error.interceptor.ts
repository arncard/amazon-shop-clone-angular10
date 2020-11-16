import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthenticateService } from '../authentication/authenticate-service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor
{
  constructor(private authService: AuthenticateService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if ([401, 403].includes(err.status)) 
        {
          this.authService.SignOut();
        }
        const error = err.error?.message || err.statusText;

        console.error(err);
        return throwError(error);
      })
    )
  }

}