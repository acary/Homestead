import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/pipes/filter.pipe";
import { SortPipe } from "src/app/pipes/sort.pipe";
import { TruncatePipe } from "src/app/pipes/truncate.pipe";
import { DropdownDirective } from "src/app/shared/dropdown.directive";
import { MakeThisComponent } from "../make-this/make-this.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        DropdownDirective,
        MakeThisComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        FilterPipe,
        SortPipe,
        TruncatePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ],
    exports: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        DropdownDirective,
        MakeThisComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        FilterPipe,
        SortPipe,
        TruncatePipe
    ]
})
export class RecipesModule { }