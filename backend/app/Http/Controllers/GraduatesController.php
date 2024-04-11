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
        // $graduate->save();
        $data = [
            'subject'=>'Welcome to Volutneer Hub',
            'body'=>"Welcome to the volunteer hub",
            'name'=>$request->input('student_name')
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
    }

    public function Login(Request $request) {
        \Log::info(json_encode($request->all()));
        
    }
}
