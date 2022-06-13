import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/']);
  }

  onSelect(feature: string) {
    console.log(feature);
    this.featureSelected.emit(feature);
  }

  onLogin() {
    console.log('login');
    this.authService.login();
  }

  onLogout() {
    console.log('logout');
    this.authService.logout();
  }

}
