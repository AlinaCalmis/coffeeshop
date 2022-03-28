import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DrinkItemComponent } from './menu/drink-item/drink-item.component';

const baseURL = 'http://localhost:1337';
const appURL = 'http://localhost:4200';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  serach(search:string): Observable<object> {
    return this.http.get(`${baseURL}/api/drinks/search/${search}`);
  }


  getDrinks(): Observable<any> {
    return this.http.get(`${baseURL}/api/drinks`);
  }

  getDrink(drink: number): Observable<object> {
    return this.http.get(`${baseURL}/api/drinks/${drink}`);
  }

  getDrinksSorted(criteria: string): Observable<object>{

    return this.http.get(`${baseURL}/api/drinks/sorted/${criteria}`);
  }

  getLikesCounter(drink: number): Observable<object> {
    const body=JSON.stringify(drink);
    console.log(body)
    return this.http.post(`${baseURL}/api/drinks/${drink}/updateLikes`, body);
  }

  getDislikesCounter(drink: number): Observable<object> {
    const body=JSON.stringify(drink);
    console.log(body)
    return this.http.post(`${baseURL}/api/drinks/${drink}/updateDislikes`, body);
  }



  addComment(id: number, name: string, comment:string): Observable<object> {
    
    const body = JSON.stringify({id, name, comment});
    console.log(id, name, comment, body);
    return this.http.put(`${baseURL}/api/drinks/${id}/comments?name=${name}&comment=${comment}`, body);
  }


  getComments(drink: number): Observable<object> {
    return this.http.get(`${baseURL}/api/drinks/${drink}/comments`);
  }
}
