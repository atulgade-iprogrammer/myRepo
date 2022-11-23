import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css'],
})
export class EditShoppingListComponent implements OnInit ,OnChanges{
  constructor() {}

  ngOnInit(): void {}

  name = '';
  amount = 0;
  @Input()ingredient!: Ingredient;
  @Output() newItemAdded = new EventEmitter<Ingredient>();
  @Output() selectedItemEvent=new EventEmitter<Ingredient>();
  @Output() clearElements=new EventEmitter<void>();
  onAddItem() {
    if(this.name!==''){
    this.ingredient = new Ingredient(this.name, this.amount);
    this.newItemAdded.emit(this.ingredient);
    }else{
      alert("Please add Item Details")
    }
    this.name = '';
    this.amount = 0;
  }
  // @Input() selectedItemIndex!: number;
  //  @Input() childFetch!:Ingredient
isDisabled=true;
ngOnChanges(changes: SimpleChanges): void {
 this.name=this.ingredient.item
 this.amount=this.ingredient.amount
 this.isDisabled=false;
}

onDeleteItem(){
this.selectedItemEvent.emit(this.ingredient)
this.name = '';
this.amount = 0;
}

onClear(){
this.clearElements.emit();
this.name = '';
this.amount = 0;
}
}
