<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\AdressController;
use App\Http\Controllers\UserController;

Route::get("/users",[UserController::class , 'index']);
Route::post('/user', [UserController::class , 'store']);
Route::get('/user/{id}', [UserController::class , 'show']);
Route::put('/user/{id}',[UserController::class , 'update']);
Route::delete('/user/{id}', [UserController::class , 'destroy']);

Route::get("/roles",[RoleController::class , 'index']);
Route::post('/rol', [RoleController::class , 'store']);
Route::get('/rol/{id}', [RoleController::class , 'show']);
Route::put('/rol/{id}',[RoleController::class , 'update']);
Route::delete('/rol/{id}', [RoleController::class , 'destroy']);

Route::get('/questions', [QuestionController::class, 'index']);
Route::post('/question', [QuestionController::class, 'store']);
Route::get('/question/{id}', [QuestionController::class, 'show']);
Route::put('/question/{id}', [QuestionController::class, 'update']);    
Route::delete('/question/{id}', [QuestionController::class, 'destroy']);

Route::get('/jobs', [JobController::class, 'index']);
Route::post('/job', [JobController::class, 'store']);
Route::get('/job/{id}', [JobController::class, 'show']);
Route::put('/job/{id}', [JobController::class, 'update']);
Route::delete('/job/{id}', [JobController::class, 'destroy']);

Route::get('/cities', [CityController::class, 'index']);
Route::post('/city', [CityController::class, 'store']);
Route::get('/city/{id}', [CityController::class, 'show']);
Route::put('/city/{id}', [CityController::class, 'update']);
Route::delete('/city/{id}', [CityController::class, 'destroy']);

Route::get('/answers', [AnswerController::class, 'index']);
Route::post('/answer', [AnswerController::class, 'store']);
Route::get('/answer/{id}', [AnswerController::class, 'show']);
Route::put('/answer/{id}', [AnswerController::class, 'update']);
Route::delete('/answer/{id}', [AnswerController::class, 'destroy']);

Route::get('/adresses', [AdressController::class, 'index']);
Route::post('/adress', [AdressController::class, 'store']);
Route::get('/adress/{id}', [AdressController::class, 'show']);
Route::put('/adress/{id}', [AdressController::class, 'update']);
Route::delete('/adress/{id}', [AdressController::class, 'destroy']);
/*
Route::post('/rol', App\Http\Controllers\RoleController::class, 'store');
Route::get('/rol/{id}', App\Http\Controllers\RoleController::class, 'show');
Route::put('/rol/{id}', App\Http\Controllers\RoleController::class, 'update');
Route::delete('/rol/{id}', App\Http\Controllers\RoleController::class, 'destroy');

Route::get('/questions', App\Http\Controllers\QuestionController::class, 'index');
Route::post('/question', App\Http\Controllers\QuestionController::class, 'store');
Route::get('/question/{id}', App\Http\Controllers\QuestionController::class, 'show');
Route::put('/question/{id}', App\Http\Controllers\QuestionController::class, 'update');
Route::delete('/question/{id}', App\Http\Controllers\QuestionController::class, 'destroy');

Route::get('/jobs', App\Http\Controllers\JobController::class, 'index');
Route::post('/job', App\Http\Controllers\JobController::class, 'store');
Route::get('/jobs/{id}', App\Http\Controllers\JobController::class, 'show');
Route::put('/jobs/{id}', App\Http\Controllers\JobController::class, 'update');
Route::delete('/jobs/{id}', App\Http\Controllers\JobController::class, 'destroy');

Route::get('/cities', App\Http\Controllers\CityController::class, 'index');
Route::post('/citie', App\Http\Controllers\CityController::class, 'store');
Route::get('/cities/{id}', App\Http\Controllers\CityController::class, 'show');
Route::put('/cities/{id}', App\Http\Controllers\CityController::class, 'update');
Route::delete('/cities/{id}', App\Http\Controllers\CityController::class, 'destroy');

Route::get('/answers', App\Http\Controllers\AnswerController::class, 'index');
Route::post('/answer', App\Http\Controllers\AnswerController::class, 'store');
Route::get('/answers/{id}', App\Http\Controllers\AnswerController::class, 'show');
Route::put('/answers/{id}', App\Http\Controllers\AnswerController::class, 'update');
Route::delete('/answers/{id}', App\Http\Controllers\AnswerController::class, 'destroy');

Route::get('/adresses', App\Http\Controllers\AdressController::class, 'index');
Route::post('/adress', App\Http\Controllers\AdressController::class, 'store');
Route::get('/adresses/{id}', App\Http\Controllers\AdressController::class, 'show');
Route::put('/adresses/{id}', App\Http\Controllers\AdressController::class, 'update');
Route::delete('/adresses/{id}', App\Http\Controllers\AdressController::class, 'destroy');*/
