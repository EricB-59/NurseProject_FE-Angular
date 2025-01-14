import { Component, OnInit, inject } from '@angular/core';
/*import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';*/
import { NurseService } from '../nurses/nurse.service';

@Component({
  selector: 'app-register-nurses',
  templateUrl: './register-nurses.component.html',
  styleUrl: './register-nurses.component.css',
  providers: [NurseService]
})
export class RegisterNursesComponent {
  /*existe: boolean = false;
  constructor(private router: Router) {}
  RegisterNurse: NurseService = inject(NurseService);

  form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeat_password: new FormControl(''),
  });

  register() {
    if (this.form.value.password == this.form.value.repeat_password) {
      this.RegisterNurse.registerNurse(this.form.value.first_name, this.form.value.last_name, this.form.value.email, this.form.value.password);
      this.router.navigate(['/login']);
    }
  }*/
}
