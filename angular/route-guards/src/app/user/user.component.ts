import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data: string = '';
  constructor() {}

  ngOnInit(): void {
    
  }
  canExit(): boolean {
    if(confirm('Do you wish to exit without saving?')) {
      return true;
    } else {
      return false;
    }
  }
}
