<?php

namespace App\Http\Controllers;
use App\Models\Professors;

use Illuminate\Http\Request;

class ProfessorController extends Controller
{
    public function login(Request $request) {
        \Log::info(json_encode($request->all()));
        $users = Professors::where('professor_email',$request->input('email'))->first();
        if (!$users || !($users->professor_password==$request->input("password"))){
            return response()->json([
                'status'=>500,
                'message'=>"This combination of email and password does not exist"
            ]);
        }
        return response()->json([
            'status'=>200,
            'message'=>"Login successful",
            'userInfo'=>$users,
            'type'=>'professor'
        ]);;
    }
}