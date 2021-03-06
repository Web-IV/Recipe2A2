import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  name:string;
  ingredients:string[];
  dateAdded: Date;

  constructor() { 
    this.name = "Spaghetti";
    this.ingredients = ['tomato', 'onion', 'celery', 'minced meat'];
    this.dateAdded = new Date();
  }

  ngOnInit() {
  }

}
