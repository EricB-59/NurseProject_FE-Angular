import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NurseService } from '../nurses/nurse.service';
import { Nurse } from '../nurse';


@Component({
  selector: 'app-search-by-name-nurses',
  templateUrl: './search-by-name-nurses.component.html',
  styleUrl: './search-by-name-nurses.component.css'
})


export class SearchByNameNursesComponent implements OnInit {

  nurseID?: number
  data?: Nurse[];
  constructor(private nurseService: NurseService) { }

  form = new FormGroup({
    name: new FormControl('')
  });

  ngOnInit(): void {
    if (localStorage.getItem('nurseID')) {
        this.nurseID = Number(localStorage.getItem('nurseID'))
    }
  }

  searchByName() {
    let name = this.form.value.name;
    if (this.nurseID && name) {
      this.nurseService.findByName(name).subscribe({
        next: (result) => {
          this.data = result
          console.log(this.data)
        },
        error: (err) => {
          console.error(err)
        }
      })
    }
  }
}
