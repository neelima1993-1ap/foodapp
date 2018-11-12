import { Component, OnInit , Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import { Ingredients } from '../../shared/ingredients.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeIndex: number;
  recipe: Recipe;

  constructor(private recipeService: RecipeService){ }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
    this.recipeIndex = +params['id'];
    this.recipe= this.recipeService.getRecipe(this.recipeIndex);
    })
  }

  OnAddToShoppingList(){
  	this.recipeService.AddIngredientsToShoppingList(this.recipe.ingredients);  	
  }


}

