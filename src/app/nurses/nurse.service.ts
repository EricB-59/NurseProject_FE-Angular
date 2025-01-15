import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NurseService {
  url: string = 'https://localhost:8000';

  constructor(private http: HttpClient) {}

  getAllNurses() {
    let url = this.url + `/nurse/getAll`;
    return this.http.get(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteById(id: number) {
    let url = `http://localhost:8000/nurse/deleteById/${id}`;
    return this.http.delete(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  findByName(name: string) {
    let url = this.url + `/nurse/findName/${name}`;
    return this.http.get(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  registerNurse(
    first_name: string,
    last_name: string,
    email: string,
    password: string
  ) {
    let url = this.url + '/nurse/create';
    let body = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };

    return this.http.post(url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
