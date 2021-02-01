<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Adress;
use Illuminate\Http\Request;

class AdressController extends Controller
{

    public function index()
    {
        return Adress::latest()->paginate();
    }

    public function store(Request $request)
    {
        $adress = Adress::create($request->all());

        return response()->json($adress, 201);
    }

    public function show(Adress $adress)
    {
        return $adress;
    }

    public function destroy(Adress $adress)
    {
        $adress->delete();
        return response()->json([
            'message' => 'Succes'
        ]);
    }
}
