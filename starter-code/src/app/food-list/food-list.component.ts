import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFoods: Object = {};

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  searchMeal(input){
    // let result = foods[0].filter(food=> food.length === input)

    console.log("You searched for ", input.value)
    if(input === this.foods[0]){
      
    }
    
  }

}
