import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  fetchRecipes(){
    this.http.get("http://loaclhost:3000/recipes/");
  }

}
//creare un servizio apposito è opzionale, 
//per un progetto non tanto grande i poteva lavorare direttamente nel servizio
//ma così facendo rimane molto più pulito
