import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}
  // @Output() selectedRecipe!:Recipe;
  ngOnInit(): void {}
  recipe: Recipe[] = [
    new Recipe(
      'Misal Paav',
      'Misal is a very popular spicy dish in the Maharashtra. The dish is mostly eaten for breakfast or as a midday snack or sometimes as a one-dish meal.',
      250,
      4.5,
      'https://img.freepik.com/free-photo/misal-pav-is-popular-maharashtrian-street-food-usal-sprouts-curry-topped-with-onions-tomatoes-farsan-chutney_466689-74294.jpg?w=1380&t=st=1666173573~exp=1666174173~hmac=63e8bd6d095fe0ee7931bdeecb152ec196bc03431b9ea979f6b07babaad344f8'
    ),
    new Recipe(
      'Chicken Biryani',
      'Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor.',
      600,
      5,
      'https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?w=1380&t=st=1666173366~exp=1666173966~hmac=abfe956a3de66543b8b6b7628db6a75fae71433862e5becb4581ad3a428d9348'
    ),
    new Recipe(
      'Masala Doasa',
      'Masala dosa are crispy, soft, savory and healthy crepes made with a rice and lentil batter. The dosa are gluten-free and dairy-free, with a sturdy yet soft texture that’s great for holding a hearty homemade potato filling.',
      200,
      5,
      'https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22963.jpg?w=1380'
    ),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
