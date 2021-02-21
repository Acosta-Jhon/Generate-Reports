<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index()
    {
        $role = Role::paginate(10);
        return RoleResource::collection($role);
    }

    public function store(Request $request)
    {
        $role = new Role();
        $role->rol_descripcion = $request->rol_descripcion;

        if ($role->save()) {
            return new RoleResource($role);
        }
    }

    public function show($id)
    {
        $role = Role::findOrFail($id);
        return new RoleResource($role);
    }

    public function update(Request $request, $id)
    {
        $role = Role::findOrFail($id);
        $role->rol_descripcion = $request->rol_descripcion;

        if ($role->save()) {
            return new RoleResource($role);
        }
    }

    public function destroy($id)
    {
        $role = Role::findOrFail($id);

        if ($role->load()) {
            return new RoleResource($role);
        }
    }
}
