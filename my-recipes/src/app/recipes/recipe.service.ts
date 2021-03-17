import {Recipe} from './recipe.model';

export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe('Carbonara', 'Tipica pasta con pancetta ecc..', 'https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2018/01/1517219140_f055c0757a72a3a48b267d0878cf5344e3a3f6b1-1517074283.png?w=580'),
        new Recipe('Amatriciana', 'Un primo piatto della tradizione laziale...', 'https://www.buttalapasta.it/wp-content/uploads/sites/3/2020/04/bucatini-amatriciana.jpg'),
        new Recipe('Lasagne', 'In Italia questo piatto assume diverse declinazioni...', 'https://www.ricette.com/wp-content/uploads/2013/12/lasagne-alla-bolognese.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();//.slice senza argomento clone i dati
    }
}