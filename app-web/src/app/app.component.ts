import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-web';
  user: any;
  location: any = this._location.path()

  constructor(
    private _athentication: AuthenticationService,
    private _location: Location,
    private router: Router
  ) { }

  updateUser() {
    if (this._athentication.user == undefined) {
      console.log('Error');
    } else {
      this.user = this._athentication.user;
    }
  }

  logOut() {
    this.router.navigate(['/home']);
    this.user = undefined;
    this.location = this._location.path()
  }
}
