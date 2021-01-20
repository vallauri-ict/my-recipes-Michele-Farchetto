import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../recipes/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingridient[] = [
    new Ingridient('Tua Madre', 20),
    new Ingridient('Pepe', 50),
  ];
  constructor() {}

  ngOnInit(): void {}
}
