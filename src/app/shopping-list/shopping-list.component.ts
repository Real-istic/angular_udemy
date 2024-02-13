import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('salami', 5),
    new Ingredient('peperoni', 4),
  ];
}
