import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  enteredEmail: string = "";
  continuing: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  continue($event)
  {
    // preventDefault() stops the refresh when clicking the button. 
    // this happens because the button is inside a form tag.
    $event.preventDefault();
    this.continuing = true;
  }
}
