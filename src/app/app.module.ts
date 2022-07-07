import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './components/auth/auth-interceptor.service';
import { AuthComponent } from './components/auth/auth.component';
import { IdeaService } from './components/ideas/idea.service';
import { IdeasComponent } from './components/ideas/ideas.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeService } from './components/recipes/recipe.service';
import { RecipesModule } from './components/recipes/recipes.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';
import { ActiveUsersComponent } from './components/users/active-users/active-users.component';
import { AuthGuard } from './components/users/auth-guard.service';
import { AuthService } from './components/users/auth.service';
import { InactiveUsersComponent } from './components/users/inactive-users/inactive-users.component';
import { SubscriptionListComponent } from './components/users/subscription-list/subscription-list.component';
import { UsersComponent } from './components/users/users.component';
import { UsersService } from './components/users/users.service';
import { CounterService } from './services/counter.service';
import { LoggingInterceptorService } from './services/logging-interceptor.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    AuthComponent,
    FooterComponent,
    HeaderComponent,
    InactiveUsersComponent,
    IdeasComponent,
    NotFoundComponent,
    SubscriptionListComponent,
    UsersComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RecipesModule,
    ReactiveFormsModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true },
    AuthGuard,
    AuthService,
    CounterService,
    IdeaService,
    RecipeService,
    ShoppingListService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
