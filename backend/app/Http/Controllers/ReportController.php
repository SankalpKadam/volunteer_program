<?php

namespace App\Http\Controllers;
use App\Models\Graduates;
use App\Models\Reports;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function saveReport(Request $request){
        \Log::info(json_encode($request->all()));
        if (Reports::where('graduate_id',$request->input('graduate_id'))->get()) {
            $newReport = Reports::where('graduate_id',$request->input('graduate_id'))->get()[0];
        \Log::info($newReport);

        }
        else{
            $newReport = new Reports;
        }
        $newReport->content = $request->input('content');
        $newReport->accomplishments = $request->input('accomplishments');
        $newReport->justification = $request->input('justification');
        $newReport->submission_date = now();

        $path = $request->file('file')->store('uploads');
        $newReport->report_path = $path;
        $newReport->graduate_id = $request->input('graduate_id');
        $newReport->professor_id = 1;
        $newReport->save();
        return response()->json([
            'status'=>200,
            'message'=>"Report saved successfully"
        ]);
    }

    public function getReports(Request $request){
        \Log::info(json_encode($request->all()));
        $report = Reports::where('professor_id',$request->input('id'))->get();
        $reports = [];
        foreach ($report as $one){
           $name = Graduates::find($one->graduate_id);
            $final = [
                "accomplishments"=>$one->accomplishments,
                "content"=>$one->content,
                "graduate_id"=>$one->graduate_id,
                "id"=>$one->id,
                "justification"=>$one->justification,
                "professor_id"=>$one->professor_id,
                "report_path"=>$one->report_path,
                "submission_date"=>$one->submission_date,
                "title"=>$name->student_name
            ];
            array_push($reports,$final);
        }
        return response()->json([
            "status"=>200,
            'reports'=>$reports
        ]);
    }

    public function getReport(Request $request){
        \Log::info(json_encode($request->all()));
        $report = Reports::find($request->input('id'));
        $reports = [];
        $name = Graduates::find($report->graduate_id);
         $final = [
             "accomplishments"=>$report->accomplishments,
             "content"=>$report->content,
             "graduate_id"=>$report->graduate_id,
             "id"=>$report->id,
             "justification"=>$report->justification,
             "professor_id"=>$report->professor_id,
             "report_path"=>$report->report_path,
             "submission_date"=>$report->submission_date,
             "title"=>$name->student_name
         ];
         array_push($reports,$final);
        return response()->json([
            "status"=>200,
            'reports'=>$reports
        ]);
    }

    public function saveFeedback(Request $request){
        \Log::info(json_encode($request->all()));
        $report = Reports::find($request->input('id'));
        $report->report__feedback = $request->input('feedback');
        $report->save();
        return response()->json([
            "status"=>200,
            "message"=>"Feedback saved"
        ]);
    }

    public function getFeedback(Request $request){
        \Log::info(json_encode($request->all()));
        $report = Reports::where('graduate_id',$request->input('id'))->get()[0];
        return response()->json([
            'status'=>200,
            'feedback'=>$report->report__feedback
        ]);
    }
}
