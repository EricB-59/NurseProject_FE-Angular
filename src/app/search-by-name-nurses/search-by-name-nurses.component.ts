import { Component } from '@angular/core';
import jsonData from '../data/DATA.json';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-by-name-nurses',
  templateUrl: './search-by-name-nurses.component.html',
  styleUrl: './search-by-name-nurses.component.css'
})
export class SearchByNameNursesComponent {

  users: any[] = jsonData;

  searchName = new FormGroup({
    name: new FormControl('')
  });

  searched: boolean = false;
  nameSearched: String = ''; 

  lastName: String = '';
  email: String = '';

  submitSearch(){
    this.searched = false;
    this.nameSearched = '';
    this.lastName = '';
    this.email = '';

    this.users.forEach((user) => {
      if(this.searchName.value.name === user.first_name){
        this.searched = true;
        this.nameSearched = user.first_name;
        this.lastName = user.last_name;
        this.email = user.email;
      }
      
    })

    if(!this.searched){
      console.log("NO ENCONTRADO")
    }

  }

}
