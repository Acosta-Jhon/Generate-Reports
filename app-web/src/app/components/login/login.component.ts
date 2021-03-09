import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title = 'Login';
  submitted = false;
  validUser: FormGroup;

  constructor(
    private _form: FormBuilder,
    private _authentication: AuthenticationService,
    private _app: AppComponent
  ) {
    this.validUser = this._form.group({
      usu_email: ['', Validators.required],
      usu_contrasena: ['', Validators.required],
    });
  }

  logIn() {
    this.submitted = true;

    if (this.validUser.invalid) {
      return;
    } else {
      this._authentication.validate(
        this.validUser.value.usu_email,
        this.validUser.value.usu_contrasena
      );
      this._app.updateUser();
    }
  }

  ngOnInit(): void {
    this._authentication.getUsers();
  }
}
