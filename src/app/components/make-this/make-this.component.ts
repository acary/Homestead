import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-make-this',
  templateUrl: './make-this.component.html',
  styleUrls: ['./make-this.component.css']
})
export class MakeThisComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  add(recipe: Recipe) {
    console.log('Make this: ' + recipe.name);
  }

}
