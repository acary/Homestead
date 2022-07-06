import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './components/auth/auth-interceptor.service';
import { AuthComponent } from './components/auth/auth.component';
import { IdeaService } from './components/ideas/idea.service';
import { IdeasComponent } from './components/ideas/ideas.component';
import { MakeThisComponent } from './components/make-this/make-this.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeService } from './components/recipes/recipe.service';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';
import { ActiveUsersComponent } from './components/users/active-users/active-users.component';
import { AuthGuard } from './components/users/auth-guard.service';
import { AuthService } from './components/users/auth.service';
import { InactiveUsersComponent } from './components/users/inactive-users/inactive-users.component';
import { SubscriptionListComponent } from './components/users/subscription-list/subscription-list.component';
import { UsersComponent } from './components/users/users.component';
import { UsersService } from './components/users/users.service';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CounterService } from './services/counter.service';
import { LoggingInterceptorService } from './services/logging-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropdownDirective,
    MakeThisComponent,
    UsersComponent,
    TruncatePipe,
    ActiveUsersComponent,
    InactiveUsersComponent,
    NotFoundComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    SubscriptionListComponent,
    FooterComponent,
    IdeasComponent,
    FilterPipe,
    SortPipe,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ShoppingListModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true },
    UsersService,
    CounterService,
    RecipeService,
    ShoppingListService,
    IdeaService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  // entryComponents: [AlertComponent]
})
export class AppModule { }
