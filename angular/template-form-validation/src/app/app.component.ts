import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-form-validation';

  submit(form: any) {
    alert("entered");
    var firstName = form.firstName;
    var lastName = form.lastName;
    var comment = form.comment;

    console.log(firstName);
    console.log(lastName);
    console.log(comment);
  }
}
