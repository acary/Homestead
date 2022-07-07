import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './components/auth/auth.guard';
import { IdeasComponent } from './components/ideas/ideas.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SubscriptionListComponent } from './components/users/subscription-list/subscription-list.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: "auth",
    loadChildren: () => import("./modules/auth.module").then(m => m.AuthModule)
  },
  {
    path: "recipes",
    loadChildren: () =>
      import("./components/recipes/recipes.module").then(
        m => m.RecipesModule
      )
  },
  {
    path: "shopping",
    loadChildren: () =>
      import("./components/shopping-list/shopping-list.module").then(
        m => m.ShoppingListModule
      )
  },
  {
    path: 'users',
    canActivateChild: [AuthGuard],
    component: UsersComponent,
    children: [
      { path: ':id/:name', component: UsersComponent },
      { path: ':id/:name/edit', component: UsersComponent }
    ]
  },
  { path: 'subscription-list', component: SubscriptionListComponent },
  { path: 'ideas', component: IdeasComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
