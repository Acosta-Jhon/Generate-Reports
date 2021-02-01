<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{

    public function index()
    {
        return Answer::latest()->paginate();
    }

    public function store(Request $request)
    {
        $answer = Answer::create($request->all());

        return response()->json($answer, 201);
    }

    public function show(Answer $answer)
    {
        return $answer;
    }

    public function destroy(Answer $answer)
    {
        $answer->delete();
        return response()->json([
            'message' => 'Succes'
        ]);
    }
}
