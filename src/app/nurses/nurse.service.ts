import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NurseService {
  constructor(private http: HttpClient) {}

  getAllNurses() {
    let url = 'https://localhost:8000/nurse/getAll';
    return this.http.get(
      url, {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    );
  }

}
