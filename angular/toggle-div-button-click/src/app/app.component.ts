import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toggle-div-button-click';
  
  isShowDiv = false;

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
}
