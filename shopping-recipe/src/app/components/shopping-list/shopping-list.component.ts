import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 3),
    new Ingredient('french beans', 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
