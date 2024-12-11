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

  loginNurse(){

  }

  searchByNameNurse() {

  }
}
