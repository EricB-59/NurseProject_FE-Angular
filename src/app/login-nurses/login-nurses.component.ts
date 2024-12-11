import {Component, inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NurseService} from '../nurses/nurse.service';

@Component({
  selector: 'app-login-nurses',
  templateUrl: './login-nurses.component.html',
  styleUrl: './login-nurses.component.css',
  providers: [NurseService],
})
export class LoginNursesComponent {
  existe: boolean = false;
  email: any = '';
  password: any = '';
  alumne: any;
  nurseService:NurseService = inject(NurseService);

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  login(){
    this.existe = false;
    this.email = this.form.value.email;
    this.password = this.form.value.password;

    this.alumne = this.nurseService.loginNurse(this.email, this.password);

    if (this.alumne === undefined) {
      console.log('Email o contraseña incorrecto');
      return;
    } else {
      this.existe = true;
    }
  }
}
