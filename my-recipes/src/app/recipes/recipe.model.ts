export class Recipe{//attraverso export rendiamo accessibile dall'esterno la risorsa
  public name:string;
  public description:string;
  public imagePath:string;

  constructor(name:string, desc:string, imgPath:string){
    this.name = name;//posso passare lo stesso nome. tanto per l'assegnazione devo fare this.nomeVar = nomeParametro;
    this.description = desc;
    this.imagePath = imgPath;
  }

}
