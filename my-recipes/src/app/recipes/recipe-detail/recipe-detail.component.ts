import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
<<<<<<< HEAD

=======
>>>>>>> 66f7148062783d2c4cdaea7dfcbea865212194d8
  constructor() { }

  ngOnInit(): void {
  }

}
