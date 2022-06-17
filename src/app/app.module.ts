import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { HomeComponent } from './components/home/home.component';
import { InactiveUsersComponent } from './components/inactive-users/inactive-users.component';
import { MakeThisComponent } from './components/make-this/make-this.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';
import { AuthGuard } from './components/users/auth-guard.service';
import { AuthService } from './components/users/auth.service';
import { SubscriptionListComponent } from './components/users/subscription-list/subscription-list.component';
import { UsersComponent } from './components/users/users.component';
import { UsersService } from './components/users/users.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CounterService } from './services/counter.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { IdeasComponent } from './components/ideas/ideas.component';
import { RecipeService } from './components/recipes/recipe.service';
import { FilterPipe } from './pipes/filter.pipe';

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
    RecipeEditComponent,
    SubscriptionListComponent,
    FooterComponent,
    IdeasComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    CounterService,
    RecipeService,
    ShoppingListService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
