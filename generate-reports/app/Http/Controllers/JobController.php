<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobResource;
use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{

    public function index()
    {
        $job = Job::paginate(10);
        return JobResource::collection($job);
    }

    public function store(Request $request)
    {
        $job = new Job();
        $job->tra_descripcion = $request->tra_descripcion;

        if ($job->save()) {
            return new JobResource($job);
        }
    }

    public function show($id)
    {
        $job = Job::findOrFail($id);
        return new JobResource($job);
    }

    public function update(Request $request, $id)
    {
        $job = Job::findOrFail($id);
        $job->tra_descripcion = $request->tra_descripcion;

        if ($job->save()) {
            return new JobResource($job);
        }
    }

    public function destroy($id)
    {
        $job = Job::findOrFail($id);

        if ($job->delete()) {
            return new JobResource($job);
        }
    }
}
