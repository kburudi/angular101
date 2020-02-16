import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeBookListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('My recipe 1', 'My recipe 1 description', 'https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_960_720.jpg'),
    new Recipe('My recipe 2', 'My recipe 2 description', 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_960_720.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  selectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
