import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'best meal ever', 'https://de.ooni.com/cdn/shop/articles/Margherita-9920.jpg'),
    new Recipe('Pizza', 'best meal ever', 'https://de.ooni.com/cdn/shop/articles/Margherita-9920.jpg')
  ];
}
