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

  searchByNameNurse() {

  }
}
