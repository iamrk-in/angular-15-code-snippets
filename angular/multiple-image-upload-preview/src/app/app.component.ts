import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multiple-image-upload-preview';

  images: any = [];

  // Form Declare
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    file: new FormControl('', [Validators.required]), 
    fileSource: new FormControl('', [Validators.required])
  })

  
  get f() {
    return this.myForm.controls
  }

  onFileChange(event: any) {
    if(event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for(let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.images.push(event.target.result);          
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
}
