<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
   
    public function index()
    {
        return Question::latest()->paginate();
    }

    public function store(Request $request)
    {
        $question = Question::create($request->all());

        return response()->json($question, 201);
    }

    public function show(Question $question)
    {
        return $question;
    }

    public function destroy(Question $question)
    {
        $question->delete();
        return response()->json([
            'message' => 'Succes'
        ]);
    }
}
