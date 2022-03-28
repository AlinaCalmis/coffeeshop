import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DrinksListComponent } from './menu/drinks-list/drinks-list.component';
import { DrinkItemComponent } from './menu/drink-item/drink-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'menu/drinks',
    component: DrinksListComponent
  },
  {
    path: 'menu/drinks/:drink',
    component: DrinkItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
