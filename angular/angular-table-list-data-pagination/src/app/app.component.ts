import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'records-pagination';
  users: any;
  p: number = 1;
  total: number = 0;

  constructor(private service: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers(this.p)
      .subscribe((response: any) => {
        this.users = response.data;
        this.total = response.total;
      })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getUsers();
  }
}
