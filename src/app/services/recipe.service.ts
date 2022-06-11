import { EventEmitter } from "@angular/core";
import { Recipe } from "../components/recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Craft Burger', 
            'Delicious Summer Hamburger', 
            'assets/images/burger.jpeg',
            [
                new Ingredient('Beef', 1),
                new Ingredient('Cheese', 1),
                new Ingredient('Lettuce', 1),
                new Ingredient('Pickles', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Bun', 2)
            ]
            ),
        new Recipe(
            'Baked Beans', 
            'Homestyle Beans', 
            'assets/images/beans.jpeg',
            [
                new Ingredient('Beans', 1),
                new Ingredient('Onion', 1)
            ]
            ),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}