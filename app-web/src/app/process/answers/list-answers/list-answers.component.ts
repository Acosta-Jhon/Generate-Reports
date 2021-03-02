import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-list-answers',
  templateUrl: './list-answers.component.html',
  styleUrls: ['./list-answers.component.scss']
})
export class ListAnswersComponent implements OnInit {

  title: string = 'Listado de Reportes';
  answers: Array<any> = [];
  users: Array<any> = [];

  constructor(
    private _answerService: AnswerService,
    private toastr: ToastrService
  ) { }

  getAnswers() {
    this._answerService.allAnswers().subscribe(res => {
      this.answers = res.data
      console.log(res.data)
    },
      err => {
        this.toastr.warning('Intentalo mas tarde', 'SERVIDOR', {
          positionClass: 'toast-bottom-left'
        })
      })
  }

  getUsers() {
    this._answerService.getAllUsers().subscribe(res => {
      this.users = res.data;
    })
  }

  deleteAnswer(id: string) {
    this._answerService.supremeAnswer(id).subscribe(res => {
      this.toastr.error('Eliminado Exitosamente', 'REPORTE', {
        positionClass: 'toast-bottom-left'
      })
      this.getAnswers();
    },
      err => {
        this.toastr.warning('Intentalo mas tarde', 'RESPORTES ERROR', {
          positionClass: 'toast-bottom-left'
        })
      })
  }

  ngOnInit(): void {
    this.getAnswers();
    this.getUsers();
  }

}
