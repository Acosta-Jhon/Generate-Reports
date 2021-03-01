import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  _API = environment.urlAPI;

  constructor(private http: HttpClient) { }

  allJob(): Observable<any> {
    let header = new HttpHeaders()
      .set('Type-content', 'application/json')
    return this.http.get(`${this._API}/jobs`, {
      headers: header
    })
  }

  addJob(job: any): Observable<any> {
    return this.http.post(`${this._API}/job`, job)
  }

  supremeJob(id: string): Observable<any> {
    return this.http.delete(`${this._API}/job/${id}`)
  }

  getOnlyJob(id: string): Observable<any> {
    return this.http.get(`${this._API}/job/${id}`)
  }

  modifyJob(id: string, data: any) {
    return this.http.put(`${this._API}/job/${id}`, data)
  }
}