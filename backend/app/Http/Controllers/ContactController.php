<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactUs;
use Mail;
use App\Mail\MailNotify;
class ContactController extends Controller
{
    public function saveQuery(Request $request) {
        $newQuery = new ContactUs;
        $newQuery->first_name = $request->input('first_name');
        $newQuery->last_name = $request->input('last_name');
        $newQuery->email = $request->input('email');
        $newQuery->message = $request->input('message');
        try {
            $newQuery->save();
            $data = [
                'subject'=>'Acknowledgement for recent contact',
                'body'=>"This email is just to specify that we have received your query and someone will respond to you as soon as possible.",
                'name'=>'we got your query.',
                'pdf'=>NULL
            ];
            try{
                Mail::to($request->input('email'))->send(new MailNotify($data));
    
                return response()->json([
                    'status'=>200,
                    'message'=>"Query Registered Successfully"
                ]);
            } catch (Throwable $th) {
                return response()->json([
                    'status'=>400,
                    'message'=>"Mail not sent Successfully",
                    'error'=>$th
                ]);
            }
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'status'=>500,
                'message'=>"Some error occured while fulfilling your request.",
                'error'=>$th
            ]);
        }
    }
}
