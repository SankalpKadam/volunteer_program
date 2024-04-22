<?php

namespace App\Http\Controllers;
use Mail;
use App\Mail\MailNotify;
use PDF;
use Illuminate\Http\Request;
use App\Models\Recommendations;
use Illuminate\Support\Facades\Storage;
class RecommendationController extends Controller
{
    public function saveRecommendation(Request $request){
        \Log::info(json_encode($request->all()));
        $recommendations = new Recommendations;
        $recommendations->professor_name = $request->input('professor_name');
        $recommendations->recommendation_text = $request->input('recommendation_text');
        $recommendations->graduate_id = $request->input('graduate_id');
        $recommendations->professor_id = $request->input('professor_id');
        $recommendations->save();
        $data = [
            'text'=>$request->input('recommendation_text'),
            'professor_name'=>$request->input('professor_name')
        ];
        $pdf = PDF::loadView('pdf_email',$data);
        Storage::disk('local')->put('public/recommendation.pdf',$pdf->output());

        $mailData=[
            'title'=>"Recommendation Letter",
            'body'=>"Find your attached recommendation letter",
            'subject'=>"Recommendation from Professor",
            'pdf'=>'/public/recommendation.pdf',
            'professor_name'=>$request->input('professor_name'),
            'name'=>'your professor has recommended you'
        ];
        try{
                Mail::to('sankalp.grinds@gmail.com')->send(new MailNotify($mailData));
    
                return response()->json([
                    'status'=>200,
                    'message'=>"Recommendation saved Successfully"
                ]);
            } catch (Throwable $th) {
                return response()->json([
                    'status'=>400,
                    'message'=>"Mail not sent Successfully"
                ]);
            }
        // return $pdf->download('Recomendation.pdf');
        // return $pdf->output();
        // return response()->json([
        //     'status'=>200,
        //     'message'=>"Recommendation saved successfully"
        // ]);
    }
}
