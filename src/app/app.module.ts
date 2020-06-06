import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ShoppingListComponent } from './ShoppingList/ShoppingList.component'
import { ShoppingListEditComponent } from './ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeComponent } from './RecipeBook/Recipe.component';
import { RecipeListComponent } from './RecipeBook/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './RecipeBook/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './RecipeBook/recipeList/recipe-item/recipe-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
