import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter} from '@angular/core';

export class ShoppingListService{

    listEmitter = new EventEmitter<Ingredients[]>();
	private ingredients: Ingredient[] = [ new Ingredient('Apples', 10), new Ingredient('coffee', 11) ];

	getIngredients(){
		return this.ingredients.slice();
	}

	pushToList(newIng: Ingredient){
	    this.ingredients.push(newIng);
	    this.listEmitter.emit(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredients[] ){
		for(let i of ingredients){
			this.pushToList(i);
		}
	}
		
}