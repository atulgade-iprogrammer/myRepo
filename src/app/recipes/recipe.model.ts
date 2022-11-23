export class Recipe{
    public name:string;
    public description:string;
    public imagePath :string;
    public rating:number;
    public price:number;


    constructor(name:string,description:string,price:number,rating:number,imagePath:string){
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
        this.rating=rating;
        this.price=price;
    }

}