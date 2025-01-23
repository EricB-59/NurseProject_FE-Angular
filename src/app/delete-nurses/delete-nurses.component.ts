import { Component, OnInit } from '@angular/core';
import { NurseService } from '../nurses/nurse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-nurses',
  template: `
    <button (click)="delete()">DELETE</button>
  `,
  styles: `
  button {
    color: white;
    background-color: red;
    border: none;
    border-radius: 10px;
    padding: 10px 30px;
    cursor: pointer;
  }
  button:hover {
    background-color: #f16c6c;
    transform: scale(1.1);
  }
  `
})
export class DeleteNursesComponent implements OnInit {
constructor(private nurseService: NurseService, private router: Router) {}
nurseID?: number;
ngOnInit(): void {
  this.nurseID = Number(localStorage.getItem('nurseID'));
}
delete() {
  if(this.nurseID) {
    this.nurseService.deleteById(this.nurseID).subscribe({
      next: (result) => {
        console.info(result);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  } else {
    console.error("ID no encontrado o no valido");
  }
}
}
