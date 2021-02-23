import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.scss']
})
export class ListRolesComponent implements OnInit {

  title:string = 'Listado de Roles' 
  roles:Array<any> = [];

  constructor(
    private _roleService:RoleService,
    private toastr:ToastrService
  ) { }

  getRoles(){
    this._roleService.allRoles().subscribe( res => {
      this.roles = res.data
    },
    err => {
      console.log(err);
    })
  }

  deleteRole(id:string){
    this._roleService.supremeRole(id).subscribe(res => {
      this.toastr.error('Eliminado Exitosamente!','ROLE',{
        positionClass:'toast-bottom-left'
      })
      this.getRoles();
    },
    err => {
      this.toastr.warning('Consta en otro registro!','ROLE',{
        positionClass:'toast-bottom-left'
      })
    })
  }
  
  ngOnInit(): void {
    this.getRoles()
  }

}
