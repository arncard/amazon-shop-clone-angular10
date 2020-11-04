import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  const firebaseConfig = {
    apiKey: "AIzaSyDUK4tbdPzOeDu1XfLFxV0cotTVavtpFhQ",
    authDomain: "shop-clone.firebaseapp.com",
    databaseURL: "https://shop-clone.firebaseio.com",
    projectId: "shop-clone",
    storageBucket: "shop-clone.appspot.com",
    messagingSenderId: "1087926828389",
    appId: "1:1087926828389:web:95caff8f962711a385f58c",
    measurementId: "G-HH4T2JQR77"
  };
  constructor() { }
}
