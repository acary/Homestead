import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.makeThis.attach());
  }

}
