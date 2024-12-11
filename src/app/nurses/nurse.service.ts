import { Injectable } from '@angular/core';
import jsonData from '../data/DATA.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  nurses: any[] = jsonData;

  getAllNurses() {
    return "hola";
  }

  registerNurse() {

  }

  loginNurse(){

  }

  searchByNameNurse() {

  }
}
