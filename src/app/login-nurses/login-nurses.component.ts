import { Component } from '@angular/core';
import jsonData from '../data/DATA.json';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-nurses',
  templateUrl: './login-nurses.component.html',
  styleUrl: './login-nurses.component.css'
})
export class LoginNursesComponent {
  nurses: any[] = jsonData;

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  existe:boolean = false;


  login(){
    this.existe = false;
    this.nurses.forEach(element => {
      if (element.email == this.form.value.email && element.password == this.form.value.password) {
        this.existe = true;
      }
    });
    if (!this.existe) {
      console.log('Email o contraseña incorrecto');
    }
  }
}
