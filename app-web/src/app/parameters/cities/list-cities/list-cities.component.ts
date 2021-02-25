import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent implements OnInit {

  cities: Array<any> = []

  constructor(
    private _citiesService: CitiesService,
    private toastr:ToastrService
    ) { }

  getCities() {
    this._citiesService.allCities().subscribe(res => {
      this.cities = res.data
    })
  }

  deleteCities(id:string){
    this._citiesService.supremeCities(id).subscribe(res => {
      this.toastr.error('Eliminado Exitosamente!','CITIES',{
        positionClass:'toast-bottom-left'
      })
      this.getCities()
    },
    err => {
      this.toastr.warning('Consta en otro registro!','CITIES',{
        positionClass:'toast-bottom-left'
      })
    })
  }

  ngOnInit(): void {
    this.getCities()
  }

}
