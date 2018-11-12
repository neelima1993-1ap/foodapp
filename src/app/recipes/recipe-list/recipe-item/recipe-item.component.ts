import { Component, OnInit, Output, Input , EventEmitter} from '@angular/core';
import { Recipe} from '../../recipe.model';

import { RecipeService } from '../../recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
   @Input() recipeIndex: number;
 
 
  constructor(private recipeService: RecipeService, 
              private route: ActivatedRoute){}

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  ngOnInit() {

  
  }

}
