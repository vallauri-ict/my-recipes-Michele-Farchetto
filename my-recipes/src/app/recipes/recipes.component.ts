import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
<<<<<<< HEAD
import { RecipeService } from './recipe.service';
=======
>>>>>>> 66f7148062783d2c4cdaea7dfcbea865212194d8

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
<<<<<<< HEAD

  selectedRecipe: Recipe;

=======
  selectedRecipe: Recipe;
>>>>>>> 66f7148062783d2c4cdaea7dfcbea865212194d8
  constructor() { }

  ngOnInit(): void {
  }

}
