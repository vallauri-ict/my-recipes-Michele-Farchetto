<<<<<<< HEAD
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
=======
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
>>>>>>> 66f7148062783d2c4cdaea7dfcbea865212194d8

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
<<<<<<< HEAD
  @Output() recipeSelectedInList = new EventEmitter<Recipe>();

  /*recipes: Recipe[] = [
    new Recipe('Carbonara', 'Tipica pasta con pancetta ecc..', 'https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2018/01/1517219140_f055c0757a72a3a48b267d0878cf5344e3a3f6b1-1517074283.png?w=580'),
    new Recipe('Amatriciana', 'Un primo piatto della tradizione laziale...', 'https://www.buttalapasta.it/wp-content/uploads/sites/3/2020/04/bucatini-amatriciana.jpg'),
    new Recipe('Lasagne', 'In Italia questo piatto assume diverse declinazioni...', 'https://www.ricette.com/wp-content/uploads/2013/12/lasagne-alla-bolognese.jpg')
  ];*/

  recipes: Recipe[];

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    // alert(recipe.name);
    this.recipeSelectedInList.emit(recipe);
  }

=======

  @Input() recipe: Recipe
  @Output() recipeSelectedInList = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Carbonara', 'Tipica pasta con pancetta ecc..', 'https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2018/01/1517219140_f055c0757a72a3a48b267d0878cf5344e3a3f6b1-1517074283.png?w=580'),
    new Recipe('Amatriciana', 'Un primo piatto della tradizione laziale...', 'https://www.buttalapasta.it/wp-content/uploads/sites/3/2020/04/bucatini-amatriciana.jpg'),
    new Recipe('Lasagne', 'In Italia questo piatto assume diverse declinazioni...', 'https://www.ricette.com/wp-content/uploads/2013/12/lasagne-alla-bolognese.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeSelectedInList.emit(recipe);
  }
>>>>>>> 66f7148062783d2c4cdaea7dfcbea865212194d8
}
