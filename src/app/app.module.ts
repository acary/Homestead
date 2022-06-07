import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { MakeThisComponent } from './components/make-this/make-this.component';
import { UsersComponent } from './components/users/users.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { UsersService } from './services/users.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { InactiveUsersComponent } from './components/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    MakeThisComponent,
    UsersComponent,
    HomeComponent,
    TruncatePipe,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
