import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }
//  selectedItem=new EventEmitter<Ingredient>();
  selectedItem!:Ingredient;
itemForDelete!:Ingredient;


  ngOnInit(): void {
  }
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
storeIngredient(item:Ingredient){
  console.log("inside list");
  console.log(item);
this.ingredients.push(item)
}
selectedItemIndex:number=0;
selected(index:number){
this.selectedItem = this.ingredients[index]
this.selectedItemIndex=index;
console.log(this.ingredients.at(index));
}

deleteItem(){
  this.ingredients.splice(this.selectedItemIndex,1)
}
clearElements(){
  this.ingredients=[];
}
}
