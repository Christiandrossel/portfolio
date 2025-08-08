import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {
  }

  onLogin() {
    // Hier kann die Login-Logik implementiert werden
    console.log('Login:', this.username, this.password);
  }

  onGoogleLogin() {
    this.auth.loginWithGoogle().then(cred => {
      const email = cred.user.email;
      if (this.auth.isAllowed(email)) {
        this.router.navigate(['/']); // z.B. Home
      } else {
        this.errorMessage = 'Zugriff verweigert.';
        this.auth.logout();
      }
    }).catch(err => {
      this.errorMessage = err.message;
    });
  }
}

