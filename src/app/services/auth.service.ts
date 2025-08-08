import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, user } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Whitelist, only these users are allowed to log in
  allowedUsers = ['timmi0701@gmail.com'];

  user$: Observable<any>;

  constructor(private auth: Auth) {
    this.user$ = user(auth);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

  isAllowed(email: string | null): boolean {
    return !!email && this.allowedUsers.includes(email);
  }
}
