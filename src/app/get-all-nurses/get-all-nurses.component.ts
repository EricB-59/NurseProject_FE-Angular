import { Component, OnInit } from '@angular/core';
import jsonData from '../data/DATA.json';
import { NurseService } from '../nurses/nurse.service';
@Component({
  selector: 'app-get-all-nurses',
  templateUrl: './get-all-nurses.component.html',
  styleUrl: './get-all-nurses.component.css',
  providers: [NurseService]
})
export class GetAllNursesComponent implements OnInit {
  nurses: any[] = jsonData; 
  constructor(private nurseService: NurseService) {}
  ngOnInit(): void {
    this.nurseService.getAllNurses();
    console.log(this.nurseService.getAllNurses());
  }

}
