<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Graduates;
use Mail;
use App\Mail\MailNotify;
class GraduatesController extends Controller
{
    //
    public function register(Request $request) {
        \Log::info(json_encode($request->all()));
        $graduate = new Graduates;
        $graduate->student_name = $request->input('student_name');
        $graduate->student_graduation_date = $request->input('student_graduation_date');
        $graduate->student_email = $request->input('student_email');
        $graduate->student_password = $request->input('student_password');
        $graduate->student_phone_number = $request->input('student_phone_number');
        $graduate->professor_id = $request->input('student_professor_id');
        $graduate->student_hours_worked = rand(10,30);
        $graduate->student_progress = rand(15,40);
        try {
            //code...
            $graduate->save();
            $data = [
                'subject'=>'Welcome to Volutneer Hub',
                'body'=>"Welcome to the volunteer hub",
                'name'=>$request->input('student_name'),
                'pdf'=>NULL
            ];
            try{
                Mail::to($request->input('student_email'))->send(new MailNotify($data));
    
                return response()->json([
                    'status'=>200,
                    'message'=>"User Registered Successfully"
                ]);
            } catch (Throwable $th) {
                return response()->json([
                    'status'=>400,
                    'message'=>"Mail not sent Successfully"
                ]);
            }
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'status'=>400,
                'message'=>"Email or phone number already exists",
                'error'=>$th
            ]);
        }
        
    }

    public function login(Request $request) {
        \Log::info(json_encode($request->all()));
        $users = Graduates::where('student_email',$request->input('email'))->first();
        if (!$users || !($users->student_password==$request->input("password"))){
            return response()->json([
                'status'=>500,
                'message'=>"This combination of email and password does not exist"
            ]);
        }
        return response()->json([
            'status'=>200,
            'message'=>"Login successful",
            'userInfo'=>$users,
            'type'=>'student'
        ]);;
    }
}
