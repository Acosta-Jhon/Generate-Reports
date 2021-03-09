import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  _API = environment.urlAPI;
  users: Array<any> = [];
  user: any;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  allUsers(): Observable<any> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(`${this._API}/users`, {
      headers: header,
    });
  }

  getUsers() {
    this.allUsers().subscribe(
      (res) => {
        this.users = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  validate(email: any, contrasena: any) {
    this.found(email, contrasena);
    if (this.user == undefined) {
      this.toastr.error('Usuario o contraseña invalidos', 'Error', {
        positionClass: 'toast-top-center',
      });
    } else {
      this.router.navigate(['answers/list-answers']);
    }
  }

  found(email: any, contrasena: any) {
    this.users.forEach((item) => {
      if (item.usu_email == email && item.usu_contrasena == contrasena) {
        this.user = item;
        return;
      }
    });
  }

  logOut() {
    this.user = undefined;
  }
}
