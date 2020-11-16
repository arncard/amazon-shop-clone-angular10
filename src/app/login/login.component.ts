import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseAuthenticationService } from '../shared/authentication/firebase-authentication.service';
import { AuthenticateService } from '../shared/authentication/authenticate-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [{
    provide: AuthenticateService,
    useClass: FirebaseAuthenticationService
  }]
})
export class LoginComponent implements OnInit {
  enteredEmail: string = "";
  continuing: boolean;
  loginForm: FormGroup;
  returnUrl: string;

  constructor(private authService: AuthenticateService, 
    private readonly fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email_phone: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), this.validatorPassword]]
    });

    this.authService.SignOut();

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
    if(!this.loginForm.get("email_phone").invalid)
      this.continuing = true;
    else
    {
      this.loginForm.get("email_phone").markAsDirty();
    }
  }

  change()
  {
    this.loginForm.patchValue({email_phone: ''});
    this.loginForm.get("email_phone").markAsPristine();
    this.continuing = false;
  }

  signin($event)
  {
    $event.preventDefault();

    this.authService.SignIn(this.loginForm.get("email_phone").value, this.loginForm.get("password").value);
  }

  register()
  {
    
  }
  
}
