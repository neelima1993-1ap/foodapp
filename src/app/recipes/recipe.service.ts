import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
 
    constructor(private shoppingListService: ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
			new Recipe('Burger', 
			'this is a test recipe2',
			"https://www.maxpixel.net/static/photo/2x/Burgers-Burger-Chickpeas-Recipes-Food-Vegetables-2920072.jpg",
			[new Ingredient('onion',3), new Ingredient('tomatoes',5)]
			),
			
			new Recipe('Pizza', 'this is a test recipe2',
				"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg",
		    [new Ingredient('cheese',3), new Ingredient('carrot',5)]
		    )
		];



	getRecipes(){
		return this.recipes.slice();
	}

	getRecipe(index: number){
		return this.recipes[number];
	}

	AddIngredientsToShoppingList(ingredients: Ingredients[]){
		this.shoppingListService.addIngredients(ingredients);
	}

}