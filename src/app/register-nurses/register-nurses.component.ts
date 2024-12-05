import { Component } from '@angular/core';
import jsonData from '../data/DATA.json';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-nurses',
  templateUrl: './register-nurses.component.html',
  styleUrl: './register-nurses.component.css'
})
export class RegisterNursesComponent {
  nurses: any[] = jsonData;

  form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeat_password: new FormControl('')
  });
  // existe:boolean = false;

  
  register(){
    if (this.form.value.password == this.form.value.repeat_password) {
      let nurse = {
        first_name: this.form.value.first_name,
        last_name: this.form.value.last_name,
        email: this.form.value.email,
        password: this.form.value.password
      }
      console.log(nurse);
    }
  }
}
