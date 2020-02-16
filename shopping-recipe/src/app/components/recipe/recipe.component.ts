import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Recipe} from './recipe-model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnChanges {

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
