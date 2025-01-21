import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nurse } from '../nurse';

@Injectable({
  providedIn: 'root',
})
export class NurseService {
  url: string = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  getAllNurses() {
    let url = this.url + `/nurse/getAll`;
    return this.http.get(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteById(id:number) {
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
  login(email : string , password : string):Observable<any>{
    const datos = { email, password};
    let url = this.url + `/nurse/login`;

    return this.http.post(
      url, datos, {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    ); 
  }

  registerNurse(nurse: Nurse): Observable<any> {
    let url = this.url + '/nurse/create';

    return this.http.post(url, nurse, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
  
  findByID(id: number) {
    let url = this.url + `/nurse/findByID/${id}`;
    return this.http.get(url, {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    });
  }
}
