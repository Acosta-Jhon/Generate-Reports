<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{

    public function index()
    {
        return City::all();
    }

    public function store(Request $request)
    {
        $city = City::create($request->all());

        return response()->json($city, 201);
    }

    public function show(City $city)
    {
        return $city;
    }

    public function destroy(City $city)
    {
        $city->delete();
        return response()->json([
            'message' => 'Succes'
        ]);
    }
}
