import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/components/auth/auth.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  goHome() {
    this.router.navigate(['/']);
  }

  onSaveData() {
    console.log('Save data:');
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    console.log('Fetch data:');
    this.dataStorageService.fetchRecipes().subscribe();
  }

}
