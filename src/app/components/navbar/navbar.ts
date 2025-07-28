import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
// import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    CommonModule,
    LoginComponent,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  // authService: AuthService;
  //
  // constructor(authService: AuthService) {
  //   this.authService = authService;
  // }

}
