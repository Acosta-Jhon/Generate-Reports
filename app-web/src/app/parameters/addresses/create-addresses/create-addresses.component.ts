import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressesService } from '../../../services/addresses.service';

@Component({
  selector: 'app-create-addresses',
  templateUrl: './create-addresses.component.html',
  styleUrls: ['./create-addresses.component.scss']
})
export class CreateAdressesComponent implements OnInit {

  createAddresses: FormGroup;
  submitted = false;
  id: string | null;
  title: string = 'Agregar addresses'

  constructor(
    private _form: FormBuilder,
    private _addressesService: AddressesService,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.createAddresses = this._form.group({
      direc_calle_principal: ['', Validators.required],
      direc_calle_secundaria: ['', Validators.required]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  insertUpdateAddresses() {
    this.submitted = true;

    if (this.createAddresses.invalid) {
      return;
    }
    if (this.id === null) {
      this.insertAddresses()
    } else {
      this.updateAddresses(this.id)
    }
  }

  insertAddresses() {
    const addresses: any = {
      direc_calle_principal: this.createAddresses.value.direc_calle_principal,
      direc_calle_secundaria: this.createAddresses.value.direc_calle_secundaria,
    }
    this._addressesService.addAddresses(addresses).subscribe(res => {
      this.toastr.success('Registrado Exitosamente!', 'ADDRESSES', {
        positionClass: 'toast-bottom-left'
      });
      this.router.navigate(['addresses/list-addresses'])
    },
      err => {
        console.log(err)
      })
  }

  updateAddresses(id: any) {
    const addresses:any = {
      direc_calle_principal: this.createAddresses.value.direc_calle_principal,
      direc_calle_secundaria: this.createAddresses.value.direc_calle_secundaria
    }
    this._addressesService.modifyAddresses(id, addresses).subscribe(res => {
      this.toastr.info('Actualizado Exitosamente!', 'Addresses', {
        positionClass: 'toast-bottom-left'
      })
      this.router.navigate(['addresses/list-addresses'])
    },
    err => {
      console.log(err)
    })
  }

  getOnlyAddresses(){
    this.title = 'Actualizar Addresses';
    if(this.id !== null){ 
    this._addressesService.getOnlyAddresses(this.id).subscribe(data => {
      this.createAddresses.setValue({
        direc_calle_principal: data.data.direc_calle_principal,
        direc_calle_secundaria: data.data.direc_calle_secundaria,

      })
    })}
  }

  ngOnInit(): void {
    this.getOnlyAddresses()
  }

}
