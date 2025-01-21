import { Component, OnInit } from '@angular/core';
import { NurseService } from '../nurses/nurse.service';
import { Nurse } from '../nurse';

@Component({
  selector: 'app-delete-nurses',
  template: `
    <p>
      delete-nurses works!
    </p>
  `,
  styles: ``
})
export class DeleteNursesComponent implements OnInit {
constructor(private nurseService: NurseService) {}

ngOnInit(): void {
  if (this.nurseService.nurseID) {
    this.nurseService.deleteById(this.nurseService.nurseID).subscribe({
      next: (result) => { 
        this.nurseService.nurseID = result;
      },
      error: (err) => {
        console.log("Id incorrecto!")
      }
    })
  } else {
    console.error("No se ha pasado un ID correcto!");
  }
}
}
