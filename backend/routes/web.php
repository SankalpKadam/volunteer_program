<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GraduatesController;
Route::get('/', function () {
    return view('welcome');
});

Route::post('/register',[GraduatesController::class, 'register']);
