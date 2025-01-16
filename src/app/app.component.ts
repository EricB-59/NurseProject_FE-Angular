import { Component, OnInit } from '@angular/core';
import { NurseService } from './nurses/nurse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'NurseProject_FE-Angular';
  logged: boolean = false;

  constructor(private _userService: NurseService) {}

  ngOnInit() {
    this._userService.getAllNurses().subscribe({
      next: (data) => console.log('User data:', data),
      error: (err) => console.error('Error:', err),
    });
  }
}
