import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .hero {
      background-image: url('/assets/img/bg-home-2.jpg') ! important;
      background-size: cover;
      background-position: center center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
