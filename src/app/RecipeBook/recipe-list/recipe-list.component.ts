import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe ('A Test Recipe','This is simply a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vegetarian-recipes-1582652898.jpg?crop=1.00xw:0.505xh;0,0.0513xh&resize=980:*')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
