import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InactiveUsersComponent } from './components/inactive-users/inactive-users.component';
import { MakeThisComponent } from './components/make-this/make-this.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { UsersComponent } from './components/users/users.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CounterService } from './services/counter.service';
import { ShoppingListService } from './services/shopping-list.service';
import { UsersService } from './services/users.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';

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
    InactiveUsersComponent,
    NotFoundComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    CounterService,
    ShoppingListService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
