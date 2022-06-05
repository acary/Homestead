import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Craft Burger', 'Delicious Summer Hamburger', 'assets/images/burger.jpeg'),
    new Recipe('Baked Beans', 'Homestyle Beans', 'assets/images/beans.jpeg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    // console.log('Recipe selected: ', recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
