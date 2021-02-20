import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _API = 'http://127.0.0.1:8000/api/users'
  

  constructor(private http: HttpClient) { 
    console.log('user')
  }
  getUsers() {
    let header = new HttpHeaders()
      .set('Type-content', 'application/json')
      return this.http.get(this._API,{
        headers:header
      })
  }

  deleteUsers(row:string){
    console.log(row)
  }
}
