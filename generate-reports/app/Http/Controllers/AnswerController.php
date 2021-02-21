<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\AnswerResource;
use App\Models\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{

    public function index()
    {
        $answer = Answer::paginate(10);
        return AnswerResource::collection($answer);
    }

    public function store(Request $request)
    {
        $answer = new Answer();
        $answer->res_boleano = $request->res_boleano;
        $answer->res_fecha = $request->res_fecha;
        $answer->res_observacion = $request->res_observacion;
        $answer->res_observacion_general = $request->res_observacion_general;
        $answer->usuario_id = $request->usuario_id;
        $answer->preguntas_id = $request->preguntas_id;
        $answer->trabajos_id = $request->trabajos_id;
        $answer->ciudades_id = $request->ciudades_id;
        $answer->direccion_id = $request->direccion_id;

        if ($answer->save()) {
            return new AnswerResource($answer);
        }
    }

    public function show($id)
    {
        $answer = Answer::findOrFail($id);
        return new AnswerResource($answer);
    }

    public function update(Request $request, $id)
    {
        $answer = Answer::findOrFail($id);
        $answer->res_boleano = $request->res_boleano;
        $answer->res_fecha = $request->res_fecha;
        $answer->res_observacion = $request->res_observacion;
        $answer->res_observacion_general = $request->res_observacion_general;
        $answer->usuario_id = $request->usuario_id;
        $answer->preguntas_id = $request->preguntas_id;
        $answer->trabajos_id = $request->trabajos_id;
        $answer->ciudades_id = $request->ciudades_id;
        $answer->direccion_id = $request->direccion_id;

        if ($answer->save()) {
            return new AnswerResource($answer);
        }
    }

    public function destroy($id)
    {
        $answer = Answer::findOrFail($id);

        if ($answer->delete()) {
            return new AnswerResource($answer);
        }
    }
}
