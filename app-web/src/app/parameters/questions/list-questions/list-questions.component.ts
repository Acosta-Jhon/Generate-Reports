import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { QuestionsService } from 'src/app/services/questions.service';
import { ToastrService } from 'ngx-toastr';
=======
>>>>>>> 3e947f609175f056ef4a8dcaca06588d1a486d9e

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
<<<<<<< HEAD
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
=======
  styleUrls: ['./list-questions.component.scss']
})
export class ListQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 3e947f609175f056ef4a8dcaca06588d1a486d9e
}
