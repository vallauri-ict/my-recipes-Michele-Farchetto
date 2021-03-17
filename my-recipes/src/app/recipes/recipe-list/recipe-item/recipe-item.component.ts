import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe
  @Output() recipeSelected = new EventEmitter<void>();
<<<<<<< HEAD

=======
>>>>>>> 66f7148062783d2c4cdaea7dfcbea865212194d8
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipeSelected.emit();
  }

}
