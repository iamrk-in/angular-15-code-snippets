import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes';
  toDate: Date = new Date();
  userName: string = 'jOhnPaUl';
  // array_or_string_expression | slice:start[:end]
  msg: string = 'welcome to angular';
  // number_expression | number[:digitInfo]
  num: number = 6373.73573;
  // number_expression | percent[:diditInfo]
  per: number = .7414
  // number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]
  cur: number = 466;

  Farenhiet: number = 7;
  Celcius: number = 4;
}
