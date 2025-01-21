import { Component, OnInit, inject } from '@angular/core';
import { NurseService } from '../nurses/nurse.service';
import { Router } from '@angular/router';
import { Nurse } from '../nurse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-all-nurses',
  templateUrl: './get-all-nurses.component.html',
  styleUrl: './get-all-nurses.component.css',
  providers: [NurseService]
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
  }
}
