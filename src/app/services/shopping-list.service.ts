import { EventEmitter, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients = [
        new Ingredient('Beef', 1),
        new Ingredient('Bread', 1)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}