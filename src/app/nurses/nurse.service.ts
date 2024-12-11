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

  registerNurse() {

  }

  loginNurse(email: any, password: any) {
    return this.nurses.find(user => user.email === email && user.password === password);
  }

  searchByNameNurse() {

  }
}
