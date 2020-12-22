import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Carbonara','Tipica Piatto di pasta italiana della città di Roma','https://wips.plug.it/cips/buonissimo.org/cms/2020/04/spaghetti-carbonara.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
