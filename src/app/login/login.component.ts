import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseAuthenticationService } from '../shared/authentication/firebase-authentication.service';
import { Authenticate } from '../shared/authentication/IAuthenticate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [{
    provide: Authenticate,
    useClass: FirebaseAuthenticationService
  }]
})
export class LoginComponent implements OnInit {
  enteredEmail: string = "";
  continuing: boolean;
  loginForm: FormGroup;

  constructor(private authService: Authenticate, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email_phone: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), this.validatorPassword]]
    })
  }

  validatorPassword(fc: FormControl) {
    const value = fc.value as string;
    const isInvalid = 'password' === value.trim().toLowerCase();
    return isInvalid ? { passwordError: 'Password is not a strong password'} : null;
  }
  
  continue($event)
  {
    // preventDefault() stops the refresh when clicking the button. 
    // this happens because the button is inside a form tag.
    $event.preventDefault();
    this.continuing = true;
  }

  signin($event)
  {
    $event.preventDefault();

    this.authService.SignIn(this.loginForm.get("email_phone").value, this.loginForm.get("password").value);
  }
}
