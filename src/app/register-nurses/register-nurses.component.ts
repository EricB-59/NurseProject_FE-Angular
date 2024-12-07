import { Component } from '@angular/core';
import jsonData from '../data/DATA.json';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-nurses',
  templateUrl: './register-nurses.component.html',
  styleUrl: './register-nurses.component.css',
})
export class RegisterNursesComponent {
  nurses: any[] = jsonData;
  existe: boolean = false;
  constructor(private router: Router) {}

  form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeat_password: new FormControl(''),
  });

  register() {
    if (this.form.value.password == this.form.value.repeat_password) {
      let nurse = {
        first_name: this.form.value.first_name,
        last_name: this.form.value.last_name,
        email: this.form.value.email,
        password: this.form.value.password,
      };
      console.log(nurse);
      this.existe = true;
      this.router.navigate(['/login']);
    }
  }
}
