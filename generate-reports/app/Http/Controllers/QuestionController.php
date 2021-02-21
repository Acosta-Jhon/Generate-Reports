<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\QuestionResource;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
   
    public function index()
    {
        $question = Question::paginate(10);
        return QuestionResource::collection($question);
    }

    public function store(Request $request)
    {
        $question = new Question();
        $question->pre_descripcion = $request->pre_descripcion;
        $question->pre_numero = $request->pre_numero;

        if ($question->save()) {
            return new QuestionResource($question);
        }
    }

    public function show($id)
    {
        $question = Question::findOrFail($id);
        return new QuestionResource($question);
    }

    public function update(Request $request, $id)
    {
        $question = Question::findOrFail($id);
        $question->pre_descripcion = $request->pre_descripcion;
        $question->pre_numero = $request->pre_numero;

        if ($question->save()) {
            return new QuestionResource($question);
        }
    }

    public function destroy($id)
    {
        $question = Question::findOrFail($id);

        if ($question->delete()) {
            return new QuestionResource($question);
        }
    }
}
