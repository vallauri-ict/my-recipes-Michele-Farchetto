import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe("Carbonara","Pasta con guanciale e via","https://cdn.pixabay.com/photo/2011/04/29/11/20/spaghetti-7113_960_720.jpg"),
    new Recipe("Gnocchetti","Gnocchetti di Riso","https://www.tempi.it/wp-content/uploads/2020/01/xi-jinping-winnie-the-pooh.jpg"),
    new Recipe("Cacio e Pepe","Pasta con il cacio e il pepe","https://upload.wikimedia.org/wikipedia/commons/e/ec/Spaghetti_cacio_e_pepe_%288602097091%29.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
