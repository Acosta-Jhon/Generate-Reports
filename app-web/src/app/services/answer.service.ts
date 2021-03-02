import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  _API = environment.urlAPI;

  constructor(private http: HttpClient) { }

  allAnswers(): Observable<any> {
    return this.http.get(`${this._API}/answers`)
  }

  addAnswer(answer: any): Observable<any> {
    return this.http.post(`${this._API}/answer`, answer)
  }

  supremeAnswer(id: string): Observable<any> {
    return this.http.delete(`${this._API}/answer/${id}`)
  }

  getOnlyAnswer(id: string): Observable<any> {
    return this.http.get(`${this._API}/answer/${id}`);
  }

  modifyAnswer(id:string, data: any): Observable<any> {
    return this.http.put(`${this._API}/answer/${id}`, data);
  }

  //DINAMIC PARAMS

  getAllUsers():Observable<any>{
    return this.http.get(`${this._API}/users`)
  }

  getAllQuestions():Observable<any>{
    return this.http.get(`${this._API}/questions`)
  }

  getAllJobs():Observable<any>{
    return this.http.get(`${this._API}/jobs`)
  }

  getAllCities():Observable<any>{
    return this.http.get(`${this._API}/cities`)
  }

  getAllAdress():Observable<any>{
    return this.http.get(`${this._API}/adresses`)
  }
}
