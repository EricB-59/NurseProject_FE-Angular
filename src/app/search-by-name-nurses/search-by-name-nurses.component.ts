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


  searchName = new FormGroup({
    name: new FormControl('')
  });


  nameSearched: String = '';
  lastName: String = '';
  email: String = '';

  submitSearch(){
    this.nameSearched = '';
    this.lastName = '';
    this.email = '';

    nurseService.searchByNameNurse(this.form.value.name);

    if(this.searchName.value.name?.toLowerCase() === user.first_name.toLowerCase()){
        this.searched = true;
        this.nameSearched = user.first_name;
        this.lastName = user.last_name;
        this.email = user.email;

    }

    if(!this.searched){
      console.log("NO ENCONTRADO")
    }

  }

}
