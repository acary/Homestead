import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipesResolverService } from './components/recipes/recipes-resolver.service';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AuthGuard } from './components/auth/auth.guard';
import { SubscriptionListComponent } from './components/users/subscription-list/subscription-list.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'recipes', 
    component: RecipesComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
    ]
  },
  { path: 'shopping', component: ShoppingListComponent },
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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
