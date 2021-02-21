<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $user = User::paginate(10);
        return UserResource::collection($user);
    }

    public function store(Request $request)
    {
        $user = new User();
        $user->usu_nombre = $request->usu_nombre;
        $user->usu_apellido = $request->usu_apellido;
        $user->usu_email = $request->usu_email;
        $user->usu_email_alternativo = $request->usu_email_alternativo;
        $user->usu_contrasena = $request->usu_contrasena;
        $user->usu_genero = $request->usu_genero;
        $user->usu_direccion = $request->usu_direccion;
        $user->usu_telefono = $request->usu_telefono;
        $user->rol_id = $request->rol_id;

        if ($user->save()) {
            return new UserResource($user);
        }
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return new UserResource($user);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->usu_nombre = $request->usu_nombre;
        $user->usu_apellido = $request->usu_apellido;
        $user->usu_email = $request->usu_email;
        $user->usu_email_alternativo = $request->usu_email_alternativo;
        $user->usu_contrasena = $request->usu_contrasena;
        $user->usu_genero = $request->usu_genero;
        $user->usu_direccion = $request->usu_direccion;
        $user->usu_telefono = $request->usu_telefono;
        $user->rol_id = $request->rol_id;

        if ($user->save()) {
            return new UserResource($user);
        }
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);

        if ($user->delete()) {
            return new UserResource($user);
        }
    }
}
