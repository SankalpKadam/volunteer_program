<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GraduatesController extends Controller
{
    //
    public function register(Request $request) {
        \Log::info(json_encode($request-> all()));
        return 'Hello';
    }
}
