<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\AdressResource;
use App\Models\Adress;
use Illuminate\Http\Request;

class AdressController extends Controller
{

    public function index()
    {
        $adress = Adress::paginate(10);
        return AdressResource::collection($adress);
    }

    public function store(Request $request)
    {
        $adress = new Adress();
        $adress->direc_calle_principal = $request->direc_calle_principal;
        $adress->direc_calle_secundaria = $request->direc_calle_secundaria;

        if ($adress->save()) {
            return new AdressResource($adress);
        }
    }

    public function show($id)
    {
        $adress = Adress::findOrFail($id);
        return new AdressResource($adress);
    }

    public function update(Request $request, $id)
    {
        $adress = Adress::findOrFail($id);
        $adress->direc_calle_principal = $request->direc_calle_principal;
        $adress->direc_calle_secundaria = $request->direc_calle_secundaria;

        if ($adress->save()) {
            return new AdressResource($adress);
        }
    }

    public function destroy($id)
    {
        $adress = Adress::findOrFail($id);

        if ($adress->delete()) {
            return new AdressResource($adress);
        }
    }
}
