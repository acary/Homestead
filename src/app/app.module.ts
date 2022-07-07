import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipesModule } from './components/recipes/recipes.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';
import { ActiveUsersComponent } from './components/users/active-users/active-users.component';
import { InactiveUsersComponent } from './components/users/inactive-users/inactive-users.component';
import { SubscriptionListComponent } from './components/users/subscription-list/subscription-list.component';
import { UsersComponent } from './components/users/users.component';
import { CoreModule } from './modules/core.module';
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
    CoreModule,
    FormsModule,
    HttpClientModule,
    RecipesModule,
    ReactiveFormsModule,
    ShoppingListModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
