<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\City;
use App\Helpers\Helper;
use Illuminate\Http\Request;

class CityController extends Controller
{
    

        
        public function getCities(Request $request){

            $cities = City::where('status',1)->get(['id','name']);
            $data = Helper::successResponse($cities);
            
            return response()->json($data);
        }
}
