<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CityResource;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{

    public function index()
    {
        $city = City::paginate(10);
        return CityResource::collection($city);
    }

    public function store(Request $request)
    {
        $city = new City;
        $city->ciu_descripcion = $request->ciu_descripcion;

        if ($city->save()) {
            return new CityResource($city);
        }
    }

    public function show($id)
    {
        $city = City::findOrFail($id);
        return new CityResource($city);
    }

    public function update(Request $request, $id)
    {
        $city = City::findOrFail($id);
        $city->ciu_descripcion = $request->ciu_descripcion;

        if ($city->save()) {
            return new CityResource($city);
        }
    }

    public function destroy($id)
    {
        $city = City::findOrFail($id);

        if ($city->delete()) {
            return new CityResource($city);
        }
    }
}
