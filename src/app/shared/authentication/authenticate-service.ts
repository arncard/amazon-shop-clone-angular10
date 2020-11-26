import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user';

export abstract class AuthenticateService
{
  userSubject: BehaviorSubject<User>;
  user: Observable<User>;

  constructor() {    
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }
  get userValue(): User
  {
    return this.userSubject.value;
  }

  abstract SignUp(email: string, password: string): void;
  
  abstract SignIn(email: string, password: string): void;

  abstract SignOut(): void;


  IsSignedIn(): boolean {
    return this.userSubject.value !== undefined;
  }
}