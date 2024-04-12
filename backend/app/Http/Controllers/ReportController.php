<?php

namespace App\Http\Controllers;

use App\Models\Reports;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function saveReport(Request $request){
        \Log::info(json_encode($request->all()));
        $newReport = new Reports;
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
}
