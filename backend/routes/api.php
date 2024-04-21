<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GraduatesController;
use App\Http\Controllers\ProfessorController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\RecommendationController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

#Routes to work with Login and Registration
Route::post('/register',[GraduatesController::class, 'register']);
Route::post('/login',[GraduatesController::class, 'login']);
Route::post('/professorlogin',[ProfessorController::class, 'login']);

#Routes to work with Tasks
Route::get('/getStudentTasks',[TaskController::class,'getStudentTasks']);
Route::get('/getProfessorTasks',[TaskController::class,'getProfessorTasks']);
Route::get('/getTask',[TaskController::class,'getTask']);
Route::post('/savetask',[TaskController::class,'saveTask']);
Route::post('/updatetaskstatus',[TaskController::class,'updatestatus']);

#Routes to work with Report
Route::post('/savereport',[ReportController::class,'saveReport']);
Route::get('/getreports',[ReportController::class,'getReports']);
Route::get('/getsinglereport',[ReportController::class,'getReport']);
Route::post('/feedback',[ReportController::class,'savefeedback']);
Route::get('/getfeedback',[ReportController::class,'getFeedback']);

#Routes to work with recommendation
Route::post('/recommend',[RecommendationController::class,'saveRecommendation']);

#Miscellaneous routes
Route::get('/volunteerstudents',[ProfessorController::class,'getstudents']);
Route::get('/allusers',[ProfessorController::class,'getAllUsers']);