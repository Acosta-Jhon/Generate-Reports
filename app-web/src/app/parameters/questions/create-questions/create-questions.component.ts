import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.scss'],
})
export class CreateQuestionsComponent implements OnInit {
  createQuestion: FormGroup;
  submitted = false;
  id: string | null;
  title: string = 'Agregar Pregunta';

  constructor(
    private _form: FormBuilder,
    private _questionService: QuestionsService,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) {
    this.createQuestion = this._form.group({
      pre_numero: ['', Validators.required],
      pre_descripcion: ['', Validators.required],
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  insertUpdateQuestion() {
    this.submitted = true;

    if (this.createQuestion.invalid) {
      return;
    }
    if (this.id === null) {
      this.insertQuestion();
    } else {
      this.updateQuestion(this.id);
    }
  }

  insertQuestion() {
    const question: any = {
      pre_numero: this.createQuestion.value.pre_numero,
      pre_descripcion: this.createQuestion.value.pre_descripcion,
    };
    this._questionService.addQuestion(question).subscribe(
      (res) => {
        this.toastr.success('Enviada Exitosamente!', 'Pregunta', {
          positionClass: 'toast-bottom-left',
        });
        this.router.navigate(['questions/list-questions']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateQuestion(id: any) {
    const question: any = {
      pre_numero: this.createQuestion.value.pre_numero,
      pre_descripcion: this.createQuestion.value.pre_descripcion,
    };
    this._questionService.modifyQuestion(id, question).subscribe(
      (res) => {
        this.toastr.info('Cambios Guardados Correctamente!', 'Exito', {
          positionClass: 'toast-bottom-left',
        });
        this.router.navigate(['questions/list-questions']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getOneQuestion() {
    this.title = 'Editar Pregunta';
    if (this.id !== null) {
      this._questionService.getOneQuestion(this.id).subscribe((data) => {
        this.createQuestion.setValue({
          pre_numero: data.data.pre_numero,
          pre_descripcion: data.data.pre_descripcion,
        });
      });
    }
  }

  ngOnInit(): void {
    this.getOneQuestion();
  }
}
