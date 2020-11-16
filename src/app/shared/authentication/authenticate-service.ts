import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user';

export abstract class AuthenticateService
{
  abstract userSubject: BehaviorSubject<User>;
  abstract user: Observable<User>;

  abstract SignUp(email: string, password: string): void;
  
  abstract SignIn(email: string, password: string): void;

  abstract SignOut(): void;

  IsSignedIn(): boolean {
    return this.userSubject.value !== undefined;
  }
}