import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: Array<any> = []

  constructor(
    private _userService: UserService,
    private toastr:ToastrService
    ) { }

  getUsers() {
    this._userService.allUsers().subscribe(res => {
      this.users = res.data
    })
  }

  deleteUser(id:string){
    this._userService.supremeUser(id).subscribe(res => {
      this.toastr.error('Eliminado Exitosamente!','USUARIO',{
        positionClass:'toast-bottom-left'
      })
      this.getUsers()
    },
    err => {
      console.log(err)
    })
  }

  ngOnInit(): void {
    this.getUsers()
  }

}
