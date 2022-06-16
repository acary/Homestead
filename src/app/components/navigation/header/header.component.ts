import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/users/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authenticated = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/']);
  }

  onLogin() {
    console.log('login');
    this.authService.login();
    this.authenticated = true;
  }

  onLogout() {
    console.log('logout');
    this.authService.logout();
    this.authenticated = false;
  }

}