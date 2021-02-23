import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  _API = environment.urlAPI;

  constructor(private http: HttpClient) { }

  allRoles(): Observable<any> {
    let header = new HttpHeaders()
      .set('Type-content', 'application/json')
    return this.http.get(`${this._API}/roles`, {
      headers: header
    })
  }

  addRole(role: any): Observable<any> {
    return this.http.post(`${this._API}/role`, role)
  }

  supremeRole(id: string): Observable<any> {
    return this.http.delete(`${this._API}/role/${id}`)
  }

  getOnlyRole(id: string): Observable<any> {
    return this.http.get(`${this._API}/role/${id}`)
  }

  modifyRole(id: string, data: any) {
    return this.http.put(`${this._API}/role/${id}`, data)
  }
}
