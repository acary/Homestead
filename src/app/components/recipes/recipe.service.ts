import { Subject } from "rxjs";
import { Ingredient } from "../../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [];

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         0,
    //         'Craft Burger', 
    //         'Delicious Summer Hamburger', 
    //         'assets/images/burger.jpeg',
    //         [
    //             new Ingredient('Beef', 1),
    //             new Ingredient('Cheese', 1),
    //             new Ingredient('Lettuce', 1),
    //             new Ingredient('Pickles', 1),
    //             new Ingredient('Onion', 1),
    //             new Ingredient('Bun', 2)
    //         ]
    //         ),
    //     new Recipe(
    //         1,
    //         'Baked Beans', 
    //         'Homestyle Beans', 
    //         'assets/images/beans.jpeg',
    //         [
    //             new Ingredient('Beans', 1),
    //             new Ingredient('Onion', 1)
    //         ]
    //         ),
    // ];

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.publishRecipes();
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        for (let recipe of this.recipes) {
            if (recipe.id === id) {
                return recipe;
            }
        }
        return null;
    }

    publishRecipes() {
        this.recipesChanged.next(this.recipes.slice());
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.publishRecipes();
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.publishRecipes();
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.publishRecipes();
    }
}