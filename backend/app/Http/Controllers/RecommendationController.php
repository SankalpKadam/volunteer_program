<?php

namespace App\Http\Controllers;
use Mail;
use App\Mail\MailNotify;
use PDF;
use Illuminate\Http\Request;
use App\Models\Recommendations;
class RecommendationController extends Controller
{
    public function saveRecommendation(Request $request){
        \Log::info(json_encode($request->all()));
        // $recommendations = new Recommendations;
        // $recommendations->professor_name = $request->input('professor_name');
        // $recommendations->recommendation_text = $request->input('recommendation_text');
        // $recommendations->graduate_id = $request->input('graduate_id');
        // $recommendations->professor_id = $request->input('professor_id');
        // $recommendations->save();
        $data = [
            'text'=>$request->input('recommendation_text')
        ];
        $pdf = PDF::loadView('pdf_email',$data);
        $mailData=[
            'title'=>"Recommendation Letter",
            'body'=>"Here is your recommendation letter",
            'pdf'=>$pdf->stream(),
            'subject'=>"Recommendation from Professor",
            'name'=>'Testing'
        ];
        try{
                Mail::to('ssk2320@mavs.uta.edu')->send(new MailNotify($mailData));
    
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
        // return $pdf;
        // return response()->json([
        //     'status'=>200,
        //     'message'=>"Recommendation saved successfully"
        // ]);
    }
}
