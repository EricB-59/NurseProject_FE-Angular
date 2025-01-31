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
  selectedFileBase64: string | null = null;
  constructor(private router: Router, private _userService: NurseService) {}

  form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    profileImg: new FormControl(''),
    password: new FormControl(''),
    repeat_password: new FormControl(''),
  });

  register() {
    if (this.form.value.password == this.form.value.repeat_password) {
      let nurse = new Nurse({
        first_name: this.form.value.first_name as string,
        last_name: this.form.value.last_name as string,
        email: this.form.value.email as string,
        profileImg: this.selectedFileBase64 as string,
        password: this.form.value.password as string,
      });
      this._userService.registerNurse(nurse).subscribe((result) => {
        console.log(result);
      });
      this.router.navigate(['/login']);
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.convertFileToBase64(file);
    }
  }

  convertFileToBase64(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file); // Convierte el archivo a base64
    reader.onload = () => {
      this.selectedFileBase64 = reader.result as string;
      console.log('Archivo convertido a base64:', this.selectedFileBase64);
    };
    reader.onerror = (error) => {
      console.error('Error al leer el archivo:', error);
    };
  }
}
