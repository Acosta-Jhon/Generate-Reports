import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-create-roles',
  templateUrl: './create-roles.component.html',
  styleUrls: ['./create-roles.component.scss']
})
export class CreateRolesComponent implements OnInit {

  createRole: FormGroup;
  submitted = false;
  id: string | null;
  title: string = 'Agregar Role'

  constructor(
    private _form: FormBuilder,
    private _roleService: RoleService,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.createRole = this._form.group({
      rol_descripcion: ['', Validators.required]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  insertUpdateRole() {
    this.submitted = true;

    if (this.createRole.invalid) {
      return;
    }
    if (this.id === null) {
      this.insertRole()
    } else {
      this.updateRole(this.id)
    }
  }

  insertRole() {
    const role: any = {
      rol_descripcion: this.createRole.value.rol_descripcion
    }
    this._roleService.addRole(role).subscribe(res => {
      this.toastr.success('Registrado Exitosamente!', 'ROLE', {
        positionClass: 'toast-bottom-left'
      });
      this.router.navigate(['roles/list-roles'])
    },
      err => {
        console.log(err)
      })
  }

  updateRole(id: any) {
    const role:any = {
      rol_descripcion: this.createRole.value.rol_descripcion
    }
    this._roleService.modifyRole(id, role).subscribe(res => {
      this.toastr.info('Actualizado Exitosamente!', 'USUARIO', {
        positionClass: 'toast-bottom-left'
      })
      this.router.navigate(['roles/list-roles'])
    },
    err => {
      console.log(err)
    })
  }

  getOnlyRole(){
    this.title = 'Actualizar Role';
    if(this.id !== null){ 
    this._roleService.getOnlyRole(this.id).subscribe(data => {
      this.createRole.setValue({
        rol_descripcion: data.data.rol_descripcion
      })
    })}
  }

  ngOnInit(): void {
    this.getOnlyRole()
  }

}
