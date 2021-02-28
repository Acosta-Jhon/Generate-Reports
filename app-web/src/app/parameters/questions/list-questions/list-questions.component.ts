import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss'],
})
export class ListQuestionsComponent implements OnInit {
  title: string = 'Listado de Preguntas';
  questions: Array<any> = [];

  constructor(
    private _questionService: QuestionsService,
    private toastr: ToastrService
  ) {}

  getQuestions() {
    this._questionService.allQuestions().subscribe(
      (res) => {
        this.questions = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteQuestion(id: string) {
    this._questionService.suppressQuestion(id).subscribe(
      (res) => {
        this.toastr.error('Eliminada correctamente!', 'Pregunta', {
          positionClass: 'toast-bottom-left',
        });
        this.getQuestions();
      },
      (err) => {
        this.toastr.warning('Ups!, Ocurrio un error!', 'Pregunta', {
          positionClass: 'toast-bottom-left',
        });
      }
    );
  }

  ngOnInit(): void {
    this.getQuestions();
  }
}
