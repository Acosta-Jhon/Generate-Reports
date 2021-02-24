import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressesService } from '../../../services/addresses.service';

@Component({
  selector: 'app-list-addresses',
  templateUrl: './list-addresses.component.html',
  styleUrls: ['./list-addresses.component.scss']
})
export class ListAddressesComponent implements OnInit {

  title:string = 'Listado de addresses' 
  addresses:Array<any> = [];

  constructor(
    private _addressesService:AddressesService,
    private toastr:ToastrService
  ) { }

  getAddresses(){
    this._addressesService.allAddresses().subscribe( res => {
      this.addresses = res.data
    },
    err => {
      console.log(err);
    })
  }

  deleteAddresses(id:string){
    this._addressesService.supremeAddresses(id).subscribe(res => {
      this.toastr.error('Eliminado Exitosamente!','ADDRESSES',{
        positionClass:'toast-bottom-left'
      })
      this.getAddresses();
    },
    err => {
      this.toastr.warning('Consta en otro registro!','ADDRESSES',{
        positionClass:'toast-bottom-left'
      })
    })
  }
  
  ngOnInit(): void {
    this.getAddresses()
  }

}


