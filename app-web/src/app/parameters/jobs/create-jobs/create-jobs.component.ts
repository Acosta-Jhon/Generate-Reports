import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.scss']
})
export class CreateJobsComponent implements OnInit {

  createJob: FormGroup;
  submitted = false;
  id: string | null;
  title: string = 'Agregar Trabajo'

  constructor(
    private _form: FormBuilder,
    private _jobService: JobService,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.createJob = this._form.group({
      tra_descripcion: ['', Validators.required]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  insertUpdateJob() {
    this.submitted = true;

    if (this.createJob.invalid) {
      return;
    }
    if (this.id === null) {
      this.insertJob()
    } else {
      this.updateJob(this.id)
    }
  }

  insertJob() {
    const job: any = {
      tra_descripcion: this.createJob.value.tra_descripcion
    }
    this._jobService.addJob(job).subscribe(res => {
      this.toastr.success('Registrado Exitosamente!', 'Trabajo', {
        positionClass: 'toast-bottom-left'
      });
      this.router.navigate(['jobs/list-jobs'])
    },
      err => {
        console.log(err)
      })
  }

  updateJob(id: any) {
    const job:any = {
      tra_descripcion: this.createJob.value.tra_descripcion
    }
    this._jobService.modifyJob(id, job).subscribe(res => {
      this.toastr.info('Actualizado Exitosamente!', 'Trabajo', {
        positionClass: 'toast-bottom-left'
      })
      this.router.navigate(['jobs/list-jobs'])
    },
    err => {
      console.log(err)
    })
  }

  getOnlyJob(){
    this.title = 'Actualizar Trabajo';
    if(this.id !== null){ 
    this._jobService.getOnlyJob(this.id).subscribe(data => {
      this.createJob.setValue({
        tra_descripcion: data.data.tra_descripcion
      })
    })}
  }

  ngOnInit(): void {
    this.getOnlyJob()
  }

}
