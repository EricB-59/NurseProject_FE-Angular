import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NurseService {
  constructor(private http: HttpClient) {}

  getAllNurses() {
    let url = 'http://localhost:8000/nurse/getAll';
    return this.http.get(
      url, {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    );
  }
  deleteById(id:number) {
    let url = `http://localhost:8000/nurse/deleteById/${id}`;
    return this.http.delete(
      url, {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    );
  }

}
