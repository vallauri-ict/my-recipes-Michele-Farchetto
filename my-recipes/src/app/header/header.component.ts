import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  collapsed = true;

  constructor(private dataStorageService:DataStorageService){}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes();
  }

}
