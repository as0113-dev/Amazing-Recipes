import { Component, OnInit } from '@angular/core';
import { RecipeItem } from '../models/recipe-item.interface';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipesList: RecipeItem[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipesList.subscribe({
      next: data=>{
        console.log('data returned inside recipes-component: ', data);
        
        this.recipesList = data;
      },
      error: err=>{
        console.log('ERROR inside recipes-component: ', err);
        
      }
    });
  }

  setRecipesList(item: string) {
    this.recipeService.getRecipesList(item);
  }

}
