import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/users/auth.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authenticated = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private dataStorageService: DataStorageService
  ) { }

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

  onSaveData() {
    console.log('Save data:');
    this.dataStorageService.storeRecipes();
  }

  onFetchRecipes() {
    console.log('Fetch data:');
    this.dataStorageService.fetchRecipes();
  }

}
