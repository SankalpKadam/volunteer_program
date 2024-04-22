<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function getStudentTasks(Request $request){
        \Log::info(json_encode($request->all()));
        $tasks = Tasks::where('graduate_id',$request->input('id'))->orderBy('task_deadline','asc')->get();
        return response()->json([
            'status'=>200,
            'tasks'=>$tasks
        ]);
    }

    public function getProfessorTasks(Request $request){
        \Log::info(json_encode($request->all()));
        $tasks = Tasks::where('professor_id',$request->input('id'))->orderBy('task_deadline','asc')->get();
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
        $tasks->graduate_id = $request->input('graduate_id');
        $tasks->professor_id = $request->input('professor_id');
        $tasks->task_status = 0;
        $tasks->task_priority = $request->input('priority');
        $tasks->save();
        return response()->json([
            'status'=>200,
            'message'=>'Task saved successfully'
        ]);

    }

    public function updatestatus(Request $request){
        \Log::info(json_encode($request->all()));
        $task = Tasks::find($request->input('id'));
        $task->task_status=1;
        $task->save();
        return response()->json([
            'status'=>200,
            'message'=>'Task status updated successfully'
        ]);
    }

    public function getTask(Request $request){
        \Log::info(json_encode($request->all()));
        $task = Tasks::find($request->input('id'));
        return response()->json([
            'status'=>200,
            'task'=>$task
        ]);
    }

    public function deleteTask(Request $request){
        \Log::info(json_encode($request->all()));
        $task = Tasks::find($request->input('id'));
        $res = $task->delete();
        if ($res) {
            return response()->json([
                'status'=>200,
                'message'=>"Task Delete Successful"
            ]);
        }
        else{
            return response()->json([
                'status'=>500,
                'message'=>"Task was not deleted"
            ]); 
        }
    }
}
