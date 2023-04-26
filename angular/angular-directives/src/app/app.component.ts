import { Component, OnInit } from '@angular/core';
import { Movie } from './Movie';
import { Item } from './Item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  ngOnInit(): void {
    
  }
  title = 'angular-directives';
  num: number = 1;

  movies: Movie[] = [
    {title: 'zootopia', director: 'byuo', cast: 'iy'}, 
    {title: 'zootopia2', director: 'byuo2', cast: 'iy'}, 
    {title: 'zootopia3', director: 'byuo3', cast: 'iy'}, 
    {title: 'zootopia4', director: 'byuo4', cast: 'iy'}, 
  ]

  items: Item[] = [
    {name: 'One', val: 1}, 
    {name: 'Two', val: 2}, 
    {name: 'Three', val: 3}, 
    {name: 'Four', val: 4}, 
  ]

  selectedValue1: string = 'One';
  selectedValue2: string = 'Two';
  selectedValue3: string = 'Three';
  selectedValue4: string = 'Four';
}
