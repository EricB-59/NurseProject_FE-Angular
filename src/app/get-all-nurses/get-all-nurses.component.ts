import { Component, OnInit } from '@angular/core';
import { NurseService } from '../nurses/nurse.service';
import { Nurse } from '../nurse';

@Component({
  selector: 'app-get-all-nurses',
  templateUrl: './get-all-nurses.component.html',
  styleUrl: './get-all-nurses.component.css',
})
export class GetAllNursesComponent implements OnInit {
  nurses: Nurse[] = [];

  constructor(private _userService: NurseService) {}

  ngOnInit() {
    this._userService.getAllNurses().subscribe({
      next: (data) => this.listNurses(data),
      error: (err) => console.error('Error:', err),
    });
  }

  listNurses(data: any) {
    this.nurses = data;
    console.log(data);
  }
}
