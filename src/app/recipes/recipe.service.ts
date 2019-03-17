import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Ice Cream',
            'Super tasty halo top vanilla',
            '/assets/salmon.jpg', [
                new Ingredient('cream', 1),
                new Ingredient('sugar', 2)
            ]),
        new Recipe('Big Fat Burger',
            'No bun and bacon please!',
            '/assets/salmon.jpg', [
                new Ingredient('meat', 2),
                new Ingredient('bacon', 3)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
        console.log('ingredients', ingredients);
    }
}
