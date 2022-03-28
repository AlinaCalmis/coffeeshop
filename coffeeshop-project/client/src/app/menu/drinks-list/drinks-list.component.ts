import { Component, OnInit } from "@angular/core";
import { MenuService } from "../../menu.service";
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-drinks-list",
  templateUrl: "drinks-list.component.html",
  styles: [],
})
export class DrinksListComponent implements OnInit {
  drinks;
  criteria = '';
  search = '';

  constructor(private menuService: MenuService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.url.subscribe(params => {
    
    
    if (this.criteria === '') {
      this.drinks = this.menuService.getDrinks();
    } else if (this.search === ''){
      this.sortDrinksByAll(this.criteria);
    } else {
      this.searchDrink(this.search);
    }
  }

  sortDrinksByAll(criteria: string): void {
    // this.route.params.subscribe(params => {
      this.criteria = criteria;
    console.log(this.criteria);
    this.drinks = this.menuService.getDrinksSorted(criteria);
    console.log(this.drinks);
    this.criteria = '';
    // ;})wdq
    
  }

  searchDrink(event): void {
    console.log(event.target.value.toLowerCase());
    this.search =  event.target.value.toLowerCase();
    this.drinks = this.menuService.serach(this.search)
    this.search = '';
  }
}
