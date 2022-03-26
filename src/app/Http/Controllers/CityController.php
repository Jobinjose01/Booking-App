<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    

        
        public function getCities(Request $request){

            $user = Auth::user();
            //echo $user->name;
            return response()->json(City::where('status',1)->get(['id','name']));
        }
}
