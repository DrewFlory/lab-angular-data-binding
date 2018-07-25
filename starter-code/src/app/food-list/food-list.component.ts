import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<any>;
  newFoods: Object = {};
  searchedFood:string = "";
  newArray:Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.newArray = foods;
  }


  searchMeal(){
    this.newArray = this.foods.filter((theFoodSearched) => {
      return theFoodSearched.name.toLowerCase().includes(this.searchedFood.toLowerCase())
    })
      console.log(this.newArray);
  }

  addMeal(name, calories, image){
      this.foods.push({
        name: name.value,
        calories: calories.value,
        image: image.value
      })
    }

  showForm(){
    let x = document.getElementById("myForm");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
}
}