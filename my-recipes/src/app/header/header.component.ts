import { Component} from "@angular/core";

@Component({
    selector:"app-header",
    templateUrl: "./header.component.html"
})

//il componente non è niente altro che una classe che dobbiamo esportare
//dobbiamo aggiungerlo ai moduli:
//Per farlo:
//aggiungiamo in src/app/app.module.ts
//import { HeaderComponent } from "./header/header.component";
// e nel  declaration section aggiungiamo : HeaderComponent

//Possiamo creare componenti in maniera automatica con:
//ng generate component recipes --skipTests true
//con --skipTest true evitiamo la creazione dei file nome.spec.ts che servono per dei test automatici
export class HeaderComponent{

    collapsed:boolean = true;
}