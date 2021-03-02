import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressesService } from 'src/app/services/addresses.service';
import { AnswerService } from 'src/app/services/answer.service';
import { CitiesService } from 'src/app/services/cities.service';
import { JobService } from 'src/app/services/job.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-answers',
  templateUrl: './create-answers.component.html',
  styleUrls: ['./create-answers.component.scss']
})
export class CreateAnswersComponent implements OnInit {

  createAnswer: FormGroup;
  submitted = false;
  id: string | null;
  tituloForm = "Generar Reporte";
  users: Array<any> = []
  questions: Array<any> = []
  jobs: Array<any> = []
  cities: Array<any> = []
  addresses: Array<any> = []

  constructor(
    private _form: FormBuilder,
    private _answerService: AnswerService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute,
    private _userService: UserService,
    private _questionsService: QuestionsService,
    private _jobService: JobService,
    private _cityService: CitiesService,
    private _adressService: AddressesService
  ) {
    this.createAnswer = this._form.group({
      res_boleano: ['', Validators.required],
      res_fecha: ['', Validators.required],
      res_observacion: ['', Validators.required],
      res_observacion_general: ['', Validators.required],
      usuario_id: ['', Validators.required],
      preguntas_id: ['', Validators.required],
      trabajos_id: ['', Validators.required],
      ciudades_id: ['', Validators.required],
      direccion_id: ['', Validators.required]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  insertUpdateAnswer() {
    this.submitted = true;

    if (this.createAnswer.invalid) {
      return;
    }

    if (this.id === null) {
      this.insertAnswer()
    } else {
      this.updateAnswer(this.id)
    }

  }

  insertAnswer() {
    const answer: any = {
      res_boleano: this.createAnswer.value.res_boleano,
      res_fecha: this.createAnswer.value.res_fecha,
      res_observacion: this.createAnswer.value.res_observacion,
      res_observacion_general: this.createAnswer.value.res_observacion_general,
      usuario_id: this.createAnswer.value.usuario_id,
      preguntas_id: this.createAnswer.value.preguntas_id,
      trabajos_id: this.createAnswer.value.trabajos_id,
      ciudades_id: this.createAnswer.value.ciudades_id,
      direccion_id: this.createAnswer.value.direccion_id
    }
    this._answerService.addAnswer(answer).subscribe((res) => {
      this.toastr.success('Generado Exitosamente!', 'REPORTE', {
        positionClass: 'toast-bottom-left'
      })
      this.router.navigate(['answers/list-answers'])
    },
      (err) => {
        this.toastr.warning('Intentalo mas tarde!', 'REPORTE', {
          positionClass: 'toast-bottom-left'
        })
      })
  }

  updateAnswer(id: string) {
    const answer: any = {
      res_boleano: this.createAnswer.value.res_boleano,
      res_fecha: this.createAnswer.value.res_fecha,
      res_observacion: this.createAnswer.value.res_observacion,
      res_observacion_general: this.createAnswer.value.res_observacion_general,
      usuario_id: this.createAnswer.value.usuario_id,
      preguntas_id: this.createAnswer.value.preguntas_id,
      trabajos_id: this.createAnswer.value.trabajos_id,
      ciudades_id: this.createAnswer.value.ciudades_id,
      direccion_id: this.createAnswer.value.direccion_id
    }
    this._answerService.modifyAnswer(id, answer).subscribe(res => {
      this.toastr.info('Reporte actualizado!', 'REPORTE', {
        positionClass: 'toast-bottom-left'
      })
      this.router.navigate(['answers/list-answers'])
    },
      err => {
        console.log(err)
      })
  }

  getOnlyAnwer() {
    this.tituloForm = 'Actualizar Reporte'
    if (this.id !== null) {
      this._answerService.getOnlyAnswer(this.id).subscribe(data => {
        this.createAnswer.setValue({
          res_boleano: data.data.res_boleano,
          res_fecha: data.data.res_fecha,
          res_observacion: data.data.res_observacion,
          res_observacion_general: data.data.res_observacion_general,
          usuario_id: data.data.usuario_id,
          preguntas_id: data.data.preguntas_id,
          trabajos_id: data.data.trabajos_id,
          ciudades_id: data.data.ciudades_id,
          direccion_id: data.data.direccion_id
        });
      })
    }
  }
  //Parameters
  getUsers() {
    this._userService.allUsers().subscribe(res => {
      this.users = res.data
    },
      (err) => {
        console.log(err);
      });
  }

  getQuestions() {
    this._questionsService.allQuestions().subscribe(res => {
      this.questions = res.data
    },
      (err) => {
        console.log(err);
      });
  }

  getJobs() {
    this._jobService.allJob().subscribe(res => {
      this.jobs = res.data
    },
      (err) => {
        console.log(err);
      });
  }

  getCities() {
    this._cityService.allCities().subscribe(res => {
      this.cities = res.data
    },
      (err) => {
        console.log(err);
      });
  }

  getAdress() {
    this._adressService.allAddresses().subscribe(res => {
      this.addresses = res.data
    },
      (err) => {
        console.log(err);
      });
  }

  ngOnInit(): void {
    this.getUsers()
    this.getAdress()
    this.getQuestions()
    this.getJobs()
    this.getCities()
    this.getAdress()
    this.getOnlyAnwer()
  }

}
