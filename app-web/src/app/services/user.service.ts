import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _API = environment.urlAPI;

  constructor(private http: HttpClient) { }

  allUsers(): Observable<any> {
    let header = new HttpHeaders()
      .set('Type-content', 'application/json')
    return this.http.get(`${this._API}/users`, {
      headers: header
    })
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this._API}/user`, user)
  }

  supremeUser(id: string): Observable<any> {
    return this.http.delete(`${this._API}/user/${id}`)
  }

  getOnlyUser(id: string): Observable<any> {
    return this.http.get(`${this._API}/user/${id}`)
  }

  modifyUser(id: string, data: any) {
    return this.http.put(`${this._API}/user/${id}`, data)
  }

  //Dinamic Parameter
  
  allRoles(): Observable<any> {
    let header = new HttpHeaders()
      .set('Type-content', 'application/json')
    return this.http.get(`${this._API}/roles`, {
      headers: header
    })
  }

}
