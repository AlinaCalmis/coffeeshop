import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drink-item',
  templateUrl: 'drink-item.component.html',
  styles: [
  ]
})
export class DrinkItemComponent implements OnInit {
  drink;
  comments;
  
  name: string;
  message: string;

  constructor(
    private drinkItem: MenuService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const drink = params['drink'];
      console.log(params);
    
      this.drinkItem.getDrink(drink).subscribe(drink => this.drink = drink?.[0]);

      
      this.getComments(drink);
      
    });
  }

  getLikesCounter(id): void {
    this.route.params.subscribe(params => {
      const drink = params['drink'];
      console.log(drink);
      this.drinkItem.getLikesCounter(drink).subscribe(drink => this.drink = drink?.[0]);
    });
  }

  getDislikesCounter(): void {
    this.route.params.subscribe(params => {
      const drink = params['drink'];
      console.log(drink);
      this.drinkItem.getDislikesCounter(drink).subscribe(drink => this.drink = drink?.[0]);
    });
  }

  getComments(id: number): void {
    this.route.params.subscribe((params) => {
      
      this.drinkItem.getComments(id).subscribe(comments => {
        console.log(comments);
        
        this.comments = comments
        console.log(this.comments);
        
      });
    });
  }

  submitForm(): void {
    const message = `My name is ${this.name}`;
    this.drinkItem.addComment(this.drink.prod_id, this.name, this.message).subscribe(drink => this.drink = drink?.[0]);
    alert('Thank you for contacting us. We will come back soon!');
  }

}
