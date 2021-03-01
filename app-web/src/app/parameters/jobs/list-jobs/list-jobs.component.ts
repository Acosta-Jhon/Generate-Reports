import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobService } from '../../../services/job.service';


@Component({
  selector: 'app-list-Jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.scss']
})
export class ListJobsComponent implements OnInit {

  title:string = 'Listado de Trabajos' 
  jobs:Array<any> = [];

  constructor(
    private _jobServece:JobService,
    private toastr:ToastrService
  ) { }

  getJob(){
    this._jobServece.allJob().subscribe( res => {
      this.jobs = res.data
    },
    err => {
      console.log(err);
    })
  }

  deleteJob(id:string){
    this._jobServece.supremeJob(id).subscribe(res => {
      this.toastr.error('Eliminado Exitosamente!','TRABAJOS',{
        positionClass:'toast-bottom-left'
      })
      this.getJob();
    },
    err => {
      this.toastr.warning('Consta en otro registro!','TRABAJOS',{
        positionClass:'toast-bottom-left'
      })
    })
  }
  
  ngOnInit(): void {
    this.getJob()
  }

}

