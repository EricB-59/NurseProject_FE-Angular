import { Injectable } from '@angular/core';
import jsonData from '../data/DATA.json';

@Injectable({
  providedIn: 'root'
})
export class NurseService {
  nurses: any[] = jsonData;

  getAllNurses() {
    return this.nurses;
  }

  registerNurse(first_name: any, last_name: any, email: any, password: any) {
      let nurse = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
      };
      console.log(nurse);
  }

  loginNurse(email: any, password: any) {
    return this.nurses.find(user => user.email === email && user.password === password);
  }

  searchByNameNurse(first_name: any) {
      return this.nurses.find(nurse => nurse.first_name.toUpperCase() === first_name);
  }
}
