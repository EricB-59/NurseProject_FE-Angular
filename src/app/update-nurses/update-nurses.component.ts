import { Component, OnInit } from '@angular/core';
import { NurseService } from '../nurses/nurse.service';
import { Nurse } from '../nurse';

@Component({
  selector: 'app-update-nurses',
  templateUrl: './update-nurses.component.html',
  styleUrl: './update-nurses.component.css'
})
export class UpdateNursesComponent implements OnInit {
  constructor(private nurseService: NurseService) { }
  nurseData?: Nurse;

  ngOnInit() {
    this.loadNurseData()
  }

  loadNurseData() {
    const nurseId = this.nurseService.nurseID;
  }

}
