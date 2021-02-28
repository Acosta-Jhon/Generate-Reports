import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  _API = environment.urlAPI;

  constructor(private http: HttpClient) {}

  allQuestions(): Observable<any> {
    let header = new HttpHeaders().set('Type-content', 'applicatino/json');
    return this.http.get(`${this._API}/questions`, {
      headers: header,
    });
  }

  addQuestion(question: any): Observable<any> {
    return this.http.post(`${this._API}/question`, question);
  }

  suppressQuestion(id: string): Observable<any> {
    return this.http.delete(`${this._API}/question/${id}`);
  }

  getOneQuestion(id: string): Observable<any> {
    return this.http.get(`${this._API}/question/${id}`);
  }

  modifyQuestion(id: string, data: any) {
    return this.http.put(`${this._API}/question/${id}`, data);
  }
}
