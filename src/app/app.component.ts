import { Component, OnInit } from '@angular/core';
import { NurseService } from './nurses/nurse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{
  title = 'NurseProject_FE-Angular';
  logged: boolean = false;

}
