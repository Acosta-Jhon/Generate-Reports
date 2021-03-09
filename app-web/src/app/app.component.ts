import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-web';
  user: any = {
    id: 0,
  };

  constructor(
    private router: Router,
    private _athentication: AuthenticationService
  ) {}

  updateUser() {
    if (this._athentication.user == undefined) {
      console.log('Error');
    } else {
      this.user = this._athentication.user;
    }
  }

  logOut() {
    this._athentication.logOut();
    this.router.navigate(['answers/home']);
  }
}
