import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe-model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss']
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() clickedRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick() {
    this.clickedRecipe.emit();
  }
}
