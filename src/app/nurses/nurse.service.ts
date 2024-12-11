import { Injectable } from '@angular/core';
import jsonData from '../data/DATA.json';

@Injectable({
  providedIn: 'root'
})
export class NurseService {
  constructor() { }

  nurses: any[] = jsonData;

  getAllNurses() {

  }

  registerNurse() {

  }

  loginNurse(){

  }

  searchByNameNurse(first_name: any) {
      return this.nurses.find(nurse => nurse.first_name === first_name);
  }
}
