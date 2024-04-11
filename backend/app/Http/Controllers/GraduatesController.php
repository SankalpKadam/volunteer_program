<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Graduates;
class GraduatesController extends Controller
{
    //
    public function register(Request $request) {
        \Log::info(json_encode($request->all()));
        $graduate = new Graduates;
        $graduate->student_name = $request->input('name');
        $graduate->student_graduation_date = $request->input('date');
        $graduate->student_email = $request->input('email');
        $graduate->student_password = $request->input('password');
        $graduate->student_phone_number = $request->input('number');
        $graduate->save();
        return response()->json([
            'status'=>200,
            'message'=>"User Registered Successfully"
        ]);
    }
}
