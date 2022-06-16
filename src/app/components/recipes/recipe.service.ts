import { Subject } from "rxjs";
import { Ingredient } from "../../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

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

    getRecipe(id: number) {
        return this.recipes.slice()[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}