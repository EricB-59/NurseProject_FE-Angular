import { Component, OnInit } from '@angular/core';
import { NurseService } from '../nurses/nurse.service';
import { Nurse } from '../nurse';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-nurses',
  templateUrl: './update-nurses.component.html',
  styleUrl: './update-nurses.component.css',
})
export class UpdateNursesComponent implements OnInit {
  constructor(private nurseService: NurseService) {}
  nurseData?: Nurse;
  nurseID?: number;
  selectedFileBase64: string | null = null;

  ngOnInit() {
    this.loadNurseData();
  }

  form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    profileImg: new FormControl(''),
    password: new FormControl(''),
    repeat_password: new FormControl(''),
  });

  loadNurseData() {
    this.nurseID = Number(localStorage.getItem('nurseID'));
    if (this.nurseID) {
      this.nurseService.findByID(this.nurseID).subscribe({
        next: (data) => {
          console.info(data);
          this.nurseData = data;
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      console.error('No hay usuarios logueados');
    }
  }

  update() {
    let nurse: Nurse = {
      first_name:
        this.form.value.first_name || this.nurseData?.first_name || '',
      last_name: this.form.value.last_name || this.nurseData?.last_name || '',
      email: this.form.value.email || this.nurseData?.email || '',
      profileImg: this.selectedFileBase64 || 'noImage',
      password: this.form.value.password || this.nurseData?.email || '',
    };
    if (this.nurseID) {
      this.nurseService.updateNurse(this.nurseID, nurse).subscribe({
        next: (result) => {
          console.info(result);
        },
        error: (err) => {
          console.error(err);
        },
      });
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
