import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nurse } from '../nurse';

@Injectable({
  providedIn: 'root',
})
export class NurseService {
  url: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getAllNurses(): Observable<Nurse[]>  {
    let url = this.url + `/nurse/getAll`;
    return this.http.get<Nurse[]>(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteById(id: number): Observable<boolean> {
    let url = this.url + `/nurse/deleteById/${id}`;
    return this.http.delete<boolean>(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  findByName(name: string): Observable<Nurse[]> {
    let url = this.url + `/nurse/findName/${name}`;
    return this.http.get<Nurse[]>(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  login(email: string, password: string): Observable<number> {
    const datos = { email, password };
    let url = this.url + `/nurse/login`;

    return this.http.post<number>(url, datos, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  registerNurse(nurse: Nurse): Observable<any> {
    let url = this.url + '/nurse/create';

    return this.http.post(url, nurse, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  updateNurse(id: number, nurse: Nurse): Observable<boolean> {
    let url = this.url + `/nurse/updateById/${id}`;
    return this.http.put<boolean>(url, nurse, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  findByID(id: number): Observable<Nurse> {
    let url = this.url + `/nurse/findByID/${id}`;
    return this.http.get<Nurse>(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
