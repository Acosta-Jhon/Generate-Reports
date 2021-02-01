<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index()
    {
        return Role::latest()->paginate();
    }

    public function store(Request $request)
    {
        $role = Role::create($request->all());

        return response()->json($role, 201);
    }

    public function show(Role $role)
    {
        return $role;
    }

    public function destroy(Role $role)
    {
        $role->delete();
        return response()->json([
            'message' => 'Succes'
        ]);
    }
}
