export abstract class Authenticate
{
  abstract SignUp(): void;
  
  abstract SignIn(email: string, password: string): void;

  abstract SignOut(): void;  
}