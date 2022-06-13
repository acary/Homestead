import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { MakeThisComponent } from '../make-this/make-this.component';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit, AfterViewInit {
  @Input() recipe: Recipe;
  @ViewChild(MakeThisComponent) makeThis: MakeThisComponent; 

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
