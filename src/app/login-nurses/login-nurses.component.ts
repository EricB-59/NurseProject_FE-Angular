import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NurseService } from '../nurses/nurse.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-nurses',
  templateUrl: './login-nurses.component.html',
  styleUrl: './login-nurses.component.css',
})
export class LoginNursesComponent {
  constructor(private router: Router) {}
  existe: boolean = false;
  email: any = '';
  password: any = '';
  nurseService: NurseService = inject(NurseService);

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    this.existe = false;
    this.email = this.form.value.email;
    this.password = this.form.value.password;

    this.nurseService.login(this.email, this.password).subscribe(
      (result) => {
        localStorage.setItem('nurseID', result.toString());
        this.nurse = result;
        console.log(result);
        this.existe = true;
        if (!isNaN(result)) {
          this.router.navigate(['/getAll']);
        }
      },
      (error) => {
        console.log('Email o contraseña incorrecto');
        console.log(error);
      }
    );
  }
}