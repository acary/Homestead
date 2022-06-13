import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
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
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
