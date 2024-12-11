import { Component, input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NurseService } from '../nurses/nurse.service';


@Component({
  selector: 'app-search-by-name-nurses',
  templateUrl: './search-by-name-nurses.component.html',
  styleUrl: './search-by-name-nurses.component.css'
})


export class SearchByNameNursesComponent {

  nurseService : NurseService = inject(NurseService);

  nurse: any;


  searchName = new FormGroup({
    name: new FormControl('')
  });

  searched: boolean = false;
  nameSearched: String = '';
  lastName: String = '';
  email: String = '';

  submitSearch(){
    this.nameSearched = '';
    this.lastName = '';
    this.email = '';
    this.searched = false;

    this.nurse = this.nurseService.searchByNameNurse(this.searchName.value.name?.toUpperCase());

    if (this.nurse === undefined){
      console.log("NO ENCONTRADO");
      return;
    } else {
      this.searched = true;
      this.nameSearched = this.nurse['first_name'];
      this.lastName = this.nurse['last_name'];
      this.email = this.nurse['email'];
    }

  }

}
