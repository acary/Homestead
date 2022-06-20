import { Ingredient } from "src/app/shared/ingredient.model";

export class Recipe {
    id: number;
    name: string;
    description: string;
    imagePath: string;
    public ingredients: Ingredient[] = [];
    
    constructor(id: number, name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}