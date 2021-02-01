<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('/roles', App\Http\Controllers\RoleController::class);
Route::apiResource('/questions', App\Http\Controllers\QuestionController::class);
Route::apiResource('/jobs', App\Http\Controllers\JobController::class);
Route::apiResource('/cities', App\Http\Controllers\CityController::class);
Route::apiResource('/answers', App\Http\Controllers\AnswerController::class);
Route::apiResource('/adresses', App\Http\Controllers\AdressController::class);