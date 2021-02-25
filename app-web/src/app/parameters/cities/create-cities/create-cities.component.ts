import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CitiesService } from '../../../services/cities.service';

@Component({
  selector: 'app-create-cities',
  templateUrl: './create-cities.component.html',
  styleUrls: ['./create-cities.component.scss']
})
export class CreateCitiesComponent implements OnInit {

  createCities: FormGroup;
  submitted = false;
  id: string | null;
  title: string = 'Agregar Ciudades'

  constructor(
    private _form: FormBuilder,
    private _CitiesService: CitiesService,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.createCities = this._form.group({
    ciu_descripcion: ['', Validators.required]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  insertUpdateCities() {
    this.submitted = true;

    if (this.createCities.invalid) {
      return;
    }
    if (this.id === null) {
      this.insertCities()
    } else {
      this.updateCities(this.id)
    }
  }

  insertCities() {
    const cities: any = {
      ciu_descripcion : this.createCities.value.ciu_descripcion
    }
    this._CitiesService.addCities(cities).subscribe(res => {
      this.toastr.success('Registrado Exitosamente!', 'CITIES', {
        positionClass: 'toast-bottom-left'
      });
      this.router.navigate(['cities/list-cities'])
    },
      err => {
        console.log(err)
      })
  }

  updateCities(id: any) {
    const cities:any = {
      ciu_descripcion : this.createCities.value.ciu_descripcion
    }
    this._CitiesService.modifyCities(id, cities).subscribe(res => {
      this.toastr.info('Actualizado Exitosamente!', 'Cities', {
        positionClass: 'toast-bottom-left'
      })
      this.router.navigate(['cities/list-cities'])
    },
    err => {
      console.log(err)
    })
  }

  getOnlyCities(){
    this.title = 'Actualizar Cities';
    if(this.id !== null){ 
    this._CitiesService.getOnlyCities(this.id).subscribe(data => {
      this.createCities.setValue({
        ciu_descripcion : this.createCities.value.ciu_descripcion
      })
    })}
  }

  ngOnInit(): void {
    this.getOnlyCities()
  }

}
