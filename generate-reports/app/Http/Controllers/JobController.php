<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{

    public function index()
    {
        return Job::latest()->paginate();
    }

    public function store(Request $request)
    {
        $job = Job::create($request->all());

        return response()->json($job, 201);
    }

    public function show(Job $job)
    {
        return $job;
    }

    public function destroy(Job $job)
    {
        $job->delete();
        return response()->json([
            'message' => 'Succes'
        ]);
    }
}
