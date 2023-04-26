import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  title = "Event Binding!";

  clickCount = 0;
  clickCount2 = 0;
  value = "";
  value1 = "";

  months: any[] = ["jan", "feb", "march"];

  isAvailable = false;
  changeMonthValue = "";

  onShow() {
    alert("show button clicked!!")
  }

  clickMe() {
    this.clickCount++
  }

  clickMe2() {
    this.clickCount++
  }

  handleInput(event: any) {
    this.value = (event.target as HTMLInputElement).value;
  }


  handleInput1(element: any) {
    this.value = element.value
  }

  changeMonths(event: any) {
    this.changeMonthValue = JSON.parse(event);    
  }
}
