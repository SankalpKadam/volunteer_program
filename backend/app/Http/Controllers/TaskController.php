<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function getStudentTasks(Request $request){
        \Log::info(json_encode($request->all()));
        $tasks = Tasks::where('graduate_id',$request->input('id'))->get();
        return response()->json([
            'status'=>200,
            'tasks'=>$tasks
        ]);
    }
    public function saveTask(Request $request){
        \Log::info(json_encode($request->all()));
        $tasks = new Tasks;
        $tasks->task_title = $request->input('title');
        $tasks->task_description = $request->input('description');
        $tasks->task_deadline = $request->input('deadline');
        $tasks->task_startdate = now();
        $tasks->graduate_id = 1;
        $tasks->professor_id = 1;
        $tasks->save();
        return response()->json([
            'status'=>200,
            'message'=>'Task saved successfully'
        ]);

    }
}
