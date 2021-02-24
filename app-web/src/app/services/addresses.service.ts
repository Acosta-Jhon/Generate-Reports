
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  _API = environment.urlAPI;

  constructor(private http: HttpClient) { }

  allAddresses(): Observable<any> {
    let header = new HttpHeaders()
      .set('Type-content', 'application/json')
    return this.http.get(`${this._API}/adresses`, {
      headers: header
    })
  }

  addAddresses(addresses: any): Observable<any> {
    return this.http.post(`${this._API}/adress`, addresses)
  }

  supremeAddresses(id: string): Observable<any> {
    return this.http.delete(`${this._API}/adress/${id}`)
  }

  getOnlyAddresses(id: string): Observable<any> {
    return this.http.get(`${this._API}/adress/${id}`)
  }

  modifyAddresses(id: string, data: any) {
    return this.http.put(`${this._API}/adress/${id}`, data)
  }
}
