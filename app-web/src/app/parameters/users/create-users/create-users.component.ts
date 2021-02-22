import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {

  createUser: FormGroup;
  submitted = false;
  id: string | null;
  tituloForm = "Agregar Usuario"

  constructor(
    private _form: FormBuilder, // Validations
    private _userService: UserService, // Service for access at methods get, post, update, delete
    private router: Router, //navigate between routes
    private toastr: ToastrService, //alert
    private aRoute: ActivatedRoute
  ) {
    this.createUser = this._form.group({
      usu_nombre: ['', Validators.required],
      usu_apellido: ['', Validators.required],
      usu_email: ['', Validators.required],
      usu_email_alternativo: ['', Validators.required],
      usu_contrasena: ['', Validators.required],
      usu_genero: ['', Validators.required],
      usu_direccion: ['', Validators.required],
      usu_telefono: ['', Validators.required],
      rol_id: ['', Validators.required]
    });

    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  insertUpdateUser() {
    this.submitted = true;

    if (this.createUser.invalid) {
      return;
    }

    if (this.id === null) {
      this.insertUser()
    } else {
      this.updateUser(this.id)
    }
  }

  insertUser() {
    const user: any = {
      usu_nombre: this.createUser.value.usu_nombre,
      usu_apellido: this.createUser.value.usu_apellido,
      usu_email: this.createUser.value.usu_email, // emails uniques
      usu_email_alternativo: this.createUser.value.usu_email_alternativo,
      usu_contrasena: this.createUser.value.usu_contrasena,
      usu_genero: this.createUser.value.usu_genero,
      usu_direccion: this.createUser.value.usu_direccion,
      usu_telefono: this.createUser.value.usu_telefono,
      rol_id: this.createUser.value.rol_id
    }

    this._userService.addUser(user).subscribe(res => {
      this.toastr.success('Registrado Exitosamente!', 'USUARIO', {
        positionClass: 'toast-bottom-left'
      })
      this.router.navigate(['users/list-users'])
    },
      err => {
        console.log(err)
      });
  }

  updateUser(id: string) {
    const user: any = {
      usu_nombre: this.createUser.value.usu_nombre,
      usu_apellido: this.createUser.value.usu_apellido,
      usu_email: this.createUser.value.usu_email, // emails uniques
      usu_email_alternativo: this.createUser.value.usu_email_alternativo,
      usu_contrasena: this.createUser.value.usu_contrasena,
      usu_genero: this.createUser.value.usu_genero,
      usu_direccion: this.createUser.value.usu_direccion,
      usu_telefono: this.createUser.value.usu_telefono,
      rol_id: this.createUser.value.rol_id
    }
    this._userService.modifyUser(id, user).subscribe(res => {
      this.toastr.info('Actualizado Exitosamente!', 'USUARIO', {
        positionClass: 'toast-bottom-left'
      })
      this.router.navigate(['users/list-users'])
    },
      err => {
        console.log(err)
      })
  }

  getOnlyUser() {
    this.tituloForm = "Actualizar Usuario"
    if (this.id !== null) {
      this._userService.getOnlyUser(this.id).subscribe(data => {
        this.createUser.setValue({
          usu_nombre: data.data.usu_nombre,
          usu_apellido: data.data.usu_apellido,
          usu_email: data.data.usu_email,
          usu_email_alternativo: data.data.usu_email_alternativo,
          usu_contrasena: data.data.usu_contrasena,
          usu_genero: data.data.usu_genero,
          usu_direccion: data.data.usu_direccion,
          usu_telefono: data.data.usu_telefono,
          rol_id: data.data.rol_id,
        });
      });
    }
  }


  ngOnInit(): void {
    this.getOnlyUser()
  }

}
