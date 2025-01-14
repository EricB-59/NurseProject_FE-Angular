import { Component, OnInit } from '@angular/core';
import { NurseService } from '../nurses/nurse.service';

@Component({
  selector: 'app-get-all-nurses',
  templateUrl: './get-all-nurses.component.html',
  styleUrl: './get-all-nurses.component.css',
  providers: [NurseService]
})
export class GetAllNursesComponent {

}
