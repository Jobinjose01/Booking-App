<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\City;
use App\Models\Trip;
use Illuminate\Http\Request;

class TripController extends Controller
{
    
        public function __constructor(){

            
        }
        
        public function getAllTrips(Request $request){


            $data = Trip::join('cities AS C', 'C.id' ,'=', 'trips.source_city_id')
                        ->join('cities AS C1', 'C1.id' ,'=', 'trips.destination_city_id')
                        ->WhereNull('trips.deleted_at')
                        ->get(['C.name as source', 'C1.name as destination', 'trips.spots', 'trips.created_at', 'trips.status']);
            
           /*  if(!empty($data)){
                $response['data'] =  $data;
                $response['status'] =  1;
                $response['message'] =  "Success";
            }else{
                $response['data'] =  [];
                $response['status'] =  0;
                $response['message'] =  "No Data Found!";
            } */

            return response()->json($data);
        }
}
