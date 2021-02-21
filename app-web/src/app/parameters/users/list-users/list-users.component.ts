import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users:Array<any> = []
  private userService:UserService

  constructor(private _userService: UserService) {  
    this.userService  = _userService
   }

  getUsers(){
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res.data
      console.log(this.users)
      
    })
  }

  ngOnInit(): void {
    this.getUsers()
  }

}
