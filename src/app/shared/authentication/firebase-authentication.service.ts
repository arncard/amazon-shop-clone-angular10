import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthenticateService } from './authenticate-service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthenticationService extends AuthenticateService {
  userSubject: BehaviorSubject<any>;
  user: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth,
    private router: Router) 
  {
    super();
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  SignIn(email: string, password: string)
  {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log("Login Successful!");
      })
      .catch(error => {
        console.log("Oops! Something went wrong: ", error.message);
      });
  }

  SignUp(email, password) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log("User created successfully");
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log("Something went wrong: ", error.message);
      })
  }

  SignOut() {
    throw new Error('Method not implemented.');
  }
}
