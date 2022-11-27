import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeItem } from 'src/app/models/recipe-item.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipe: RecipeItem = {};
  @Input() index: number | undefined;
  recipeCopy: RecipeItem = {};
  currentIndex: number | undefined;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeCopy = this.recipe;
    this.currentIndex = this.index;    
  }
  onSelectedRecipe(){
    this.recipeService.currentRecipe.next(this.recipeCopy);
  }

}
