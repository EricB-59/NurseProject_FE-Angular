import { Component, OnInit } from '@angular/core';
import { NurseService } from '../nurses/nurse.service';
import { Nurse } from '../nurse';

@Component({
  selector: 'app-delete-nurses',
  template: `
   <button (click)="delete()">DELETE</button>
  `,
  styles: `
  button {
    color: white;
    background-color: red;
    padding: 10px 30px;
    margin-top: 7px;
    border-radius: 10px;
    border: none;
  }
  `
})
export class DeleteNursesComponent implements OnInit {
constructor(private nurseService: NurseService) {}
nurseID?: number;
ngOnInit(): void {
  this.nurseID = Number(localStorage.getItem('nurseID'));
}
delete() {
  if (this.nurseID) {
    this.nurseService.deleteById(this.nurseID).subscribe({
      next: (result) => { 
        console.info(result);
      },
      error: (err) => {
        console.error("Id incorrecto!")
      }
    })
  } else {
    console.error("No se ha pasado un ID correcto!");
  }
}
}
