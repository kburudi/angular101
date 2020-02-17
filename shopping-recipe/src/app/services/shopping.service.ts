import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 3),
    new Ingredient('french beans', 10),
  ];

  ingredientChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

  addIngredient(name: string, amount: number) {
    this.ingredients.push(new Ingredient( name, amount ));
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
