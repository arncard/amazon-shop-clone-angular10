import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Authenticate } from './IAuthenticate';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthenticationService extends Authenticate{

  constructor(private angularFireAuth: AngularFireAuth) 
  {
    super();
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

  SignUp() {
    throw new Error('Method not implemented.');
  }

  SignOut() {
    throw new Error('Method not implemented.');
  }
}
