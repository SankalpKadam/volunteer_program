<?php

namespace App\Http\Controllers;
use App\Models\Professors;
use App\Models\Graduates;
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

    public function getstudents(Request $request){
        \Log::info(json_encode($request->all()));
        $users = Graduates::where('professor_id',$request->input('id'))->get();
        return response()->json([
            'status'=>200,
            'students'=>$users
        ]);
    }

    public function getAllUsers(Request $request){
        \Log::info(json_encode($request->all()));
        if ($request->input("type")=="student") {
            # code...
            $graduates = Graduates::all()->whereNotIn('id',[$request->input('id')]);
            $professors = Professors::all();
        }else{
            $graduates = Graduates::all();
            $professors = Professors::all()->whereNotIn('id',[$request->input('id')]);
        }
        $users = [];
        foreach ($professors as $prof) {
            array_push($users,$prof);
        }
        foreach ($graduates as $grad) {
            array_push($users,$grad);
        }
        return response()->json([
            'status'=>200,
            'users'=>$users
        ]);
    }
}
