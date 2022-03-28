import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {
    const message = `My name is ${this.name}`;
    alert('Thank you for contacting us. We will come back soon!');
  }
}
