import { EventEmitter } from "@angular/core";
import { Recipe } from "../components/recipes/recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Craft Burger', 'Delicious Summer Hamburger', 'assets/images/burger.jpeg'),
        new Recipe('Baked Beans', 'Homestyle Beans', 'assets/images/beans.jpeg'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}