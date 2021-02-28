<?php
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
Route::post('/role', [RoleController::class , 'store']);
Route::get('/role/{id}', [RoleController::class , 'show']);
Route::put('/role/{id}',[RoleController::class , 'update']);
Route::delete('/role/{id}', [RoleController::class , 'destroy']);

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
Route::post('/city ', [CityController::class, 'store']);
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