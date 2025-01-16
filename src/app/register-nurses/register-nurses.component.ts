import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NurseService } from '../nurses/nurse.service';
import { Nurse } from '../nurse';

@Component({
  selector: 'app-register-nurses',
  templateUrl: './register-nurses.component.html',
  styleUrl: './register-nurses.component.css',
  providers: [NurseService],
})
export class RegisterNursesComponent {
  existe: boolean = false;
  constructor(private router: Router, private _userService: NurseService) {}

  form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeat_password: new FormControl(''),
  });

  register() {
    if (this.form.value.password == this.form.value.repeat_password) {
      let nurse = new Nurse({
        first_name: this.form.value.first_name as string,
        last_name: this.form.value.last_name as string,
        email: this.form.value.email as string,
        password: this.form.value.password as string,
      });
      this._userService.registerNurse(nurse).subscribe((result) => {
        console.log(result);
      });
      this.router.navigate(['/login']);
    }
  }
}
