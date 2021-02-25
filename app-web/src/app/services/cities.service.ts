import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  _API = environment.urlAPI;

  constructor(private http: HttpClient) { }

  allCities(): Observable<any> {
    let header = new HttpHeaders()
      .set('Type-content', 'application/json')
    return this.http.get(`${this._API}/cities`, {
      headers: header
    })
  }

  addCities(cities: any): Observable<any> {
    return this.http.post(`${this._API}/city`, cities)
  }

  supremeCities(id: string): Observable<any> {
    return this.http.delete(`${this._API}/city/${id}`)
  }

  getOnlyCities(id: string): Observable<any> {
    return this.http.get(`${this._API}/city/${id}`)
  }

  modifyCities(id: string, data: any) {
    return this.http.put(`${this._API}/city/${id}`, data)
  }
}
