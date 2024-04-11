<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GraduatesController;
use App\Http\Controllers\ProfessorController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register',[GraduatesController::class, 'register']);
Route::post('/login',[GraduatesController::class, 'login']);
Route::post('/professorlogin',[ProfessorController::class, 'login']);