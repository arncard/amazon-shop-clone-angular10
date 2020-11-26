import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { AuthenticateService } from './authenticate-service';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthenticationService extends AuthenticateService
{  
  constructor(
    private router: Router,
    private http: HttpClient) {
    super();

  }
  SignUp(email: string, password: string)
  {
    return this.http.post(`${environment.apiUrl}/users/register`, email);
  }

  SignIn(email: string, password: string) 
  {
    return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { email, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
  }
  
  SignOut(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }
  
}