import { Component, OnInit } from '@angular/core';
import { RecipeItem } from 'src/app/models/recipe-item.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  recipeItem!: RecipeItem;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.currentRecipe.subscribe({
      next: currRecipe => {
        this.recipeItem = currRecipe;
      },
      error: err => {
        console.log('Error in recipe-item: ' + err);

      }
    });
  }

}
