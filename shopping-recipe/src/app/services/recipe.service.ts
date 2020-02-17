import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../components/recipe/recipe-model';
import {Ingredient} from '../shared/models/ingredient.model';
import {ShoppingService} from "./shopping.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'My recipe 1',
      'My recipe 1 description',
      'https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_960_720.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Irish Potatoes', 20),
      ]
      ),
    new Recipe(
      'My recipe 2',
      'My recipe 2 description',
      'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_960_720.jpg',
      [
        new Ingredient('Onions', 2),
        new Ingredient('Tomatoes', 6),
      ]
    )
  ];

  constructor(private shoppingService: ShoppingService) { }

  selectedRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  addIngToShopList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
