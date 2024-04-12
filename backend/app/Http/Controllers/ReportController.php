<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function saveReport(Request $request){
        \Log::info(json_encode($request->all()));
        $request->file('file')->store('uploads');
        return 200;
    }
}
